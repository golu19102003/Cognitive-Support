const mongoose = require('mongoose');
const User = require('./models/User');

async function checkDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/cognitive-support');
    console.log('🔗 Connected to MongoDB');
    
    // Get all users
    const users = await User.find({});
    console.log('\n🎯 DATABASE CONTENT SUMMARY');
    console.log('=' .repeat(60));
    
    console.log(`📊 Total Users: ${users.length}`);
    
    if (users.length > 0) {
      console.log('\n👥 REGISTERED USERS:');
      console.log('-' .repeat(40));
      
      users.forEach((user, index) => {
        console.log(`\n${index + 1}. 📧 ${user.email}`);
        console.log(`   👤 Name: ${user.name}`);
        console.log(`   🎭 Role: ${user.role}`);
        console.log(`   🔐 Auth: ${user.authProvider}`);
        console.log(`   📅 Created: ${user.createdAt.toLocaleDateString()}`);
        console.log(`   🕐 Login: ${user.lastLogin ? user.lastLogin.toLocaleDateString() : 'Never'}`);
        
        // Cognitive conditions
        if (user.cognitiveProfile && user.cognitiveProfile.conditions.length > 0) {
          console.log(`   🧠 Conditions: ${user.cognitiveProfile.conditions.join(', ')}`);
        } else {
          console.log(`   🧠 Conditions: None specified`);
        }
        
        // Accessibility settings
        if (user.accessibility && user.accessibility.preferences) {
          const prefs = user.accessibility.preferences;
          console.log(`   ♿ Settings: Font-${prefs.fontSize}, Contrast-${prefs.highContrast ? 'High' : 'Normal'}`);
        }
        
        console.log(`   ✅ Status: ${user.isActive ? 'Active' : 'Inactive'}`);
        console.log('---');
      });
      
      // Statistics
      const roles = {};
      const providers = {};
      const conditions = {};
      
      users.forEach(user => {
        roles[user.role] = (roles[user.role] || 0) + 1;
        providers[user.authProvider] = (providers[user.authProvider] || 0) + 1;
        
        if (user.cognitiveProfile && user.cognitiveProfile.conditions) {
          user.cognitiveProfile.conditions.forEach(condition => {
            conditions[condition] = (conditions[condition] || 0) + 1;
          });
        }
      });
      
      console.log('\n📈 STATISTICS:');
      console.log('-' .repeat(40));
      console.log('🎭 User Roles:');
      Object.entries(roles).forEach(([role, count]) => {
        console.log(`   ${role}: ${count}`);
      });
      
      console.log('\n🔐 Auth Providers:');
      Object.entries(providers).forEach(([provider, count]) => {
        console.log(`   ${provider}: ${count}`);
      });
      
      if (Object.keys(conditions).length > 0) {
        console.log('\n🧠 Cognitive Conditions:');
        Object.entries(conditions).forEach(([condition, count]) => {
          console.log(`   ${condition}: ${count}`);
        });
      }
      
    } else {
      console.log('\n❌ NO USERS FOUND');
      console.log('💡 Register some users to see data here');
    }
    
    console.log('\n🔗 Database Info:');
    console.log(`   🗄️  Database: cognitive-support`);
    console.log(`   📚 Collections: users`);
    console.log(`   🌐 Connection: mongodb://localhost:27017`);
    
  } catch (error) {
    console.error('❌ Database Error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Connection closed');
  }
}

// Run the check
checkDatabase();
