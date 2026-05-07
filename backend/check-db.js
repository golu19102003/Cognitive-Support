const mongoose = require('mongoose');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cognitive-support')
  .then(async () => {
    console.log('🔗 Connected to MongoDB');
    console.log('📊 Database: cognitive-support');
    console.log('=' .repeat(50));
    
    try {
      // Check all users
      const users = await User.find({});
      console.log('👥 Total Users:', users.length);
      
      if (users.length > 0) {
        console.log('\n📋 User Details:');
        console.log('-'.repeat(50));
        
        users.forEach((user, index) => {
          console.log(`\n${index + 1}. 📧 Email: ${user.email}`);
          console.log(`   👤 Name: ${user.name}`);
          console.log(`   🎭 Role: ${user.role}`);
          console.log(`   🔐 Auth Provider: ${user.authProvider || 'N/A'}`);
          console.log(`   📅 Created: ${user.createdAt}`);
          console.log(`   🕐 Last Login: ${user.lastLogin || 'Never'}`);
          console.log(`   ✅ Active: ${user.isActive ? 'Yes' : 'No'}`);
          
          // Cognitive Profile
          if (user.cognitiveProfile && user.cognitiveProfile.conditions.length > 0) {
            console.log(`   🧠 Conditions: ${user.cognitiveProfile.conditions.join(', ')}`);
            console.log(`   ⚠️  Severity: ${user.cognitiveProfile.severity}`);
          }
          
          // Accessibility Preferences
          if (user.accessibility && user.accessibility.preferences) {
            const prefs = user.accessibility.preferences;
            console.log(`   ♿ Font Size: ${prefs.fontSize}`);
            console.log(`   🌓 High Contrast: ${prefs.highContrast ? 'Yes' : 'No'}`);
            console.log(`   🔊 Screen Reader: ${prefs.screenReader ? 'Yes' : 'No'}`);
            console.log(`   ⌨️  Keyboard Nav: ${prefs.keyboardNavigation ? 'Yes' : 'No'}`);
          }
          
          console.log('---');
        });
      } else {
        console.log('❌ No users found in database');
        console.log('\n💡 Tip: Register some users to see data here');
      }
      
      // Database Collections Info
      const collections = await mongoose.connection.db.listCollections().toArray();
      console.log('\n📚 Available Collections:');
      collections.forEach(collection => {
        console.log(`   - ${collection.name}`);
      });
      
    } catch (error) {
      console.error('❌ Error fetching data:', error);
    }
    
    mongoose.connection.close();
    console.log('\n🔌 Database connection closed');
  })
  .catch(err => {
    console.error('❌ Database connection error:', err);
  });
