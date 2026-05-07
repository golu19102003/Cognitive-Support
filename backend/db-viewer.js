const mongoose = require('mongoose');

// Database Content Viewer
class DatabaseViewer {
  constructor() {
    this.connection = null;
  }

  async connect() {
    try {
      this.connection = await mongoose.connect('mongodb://localhost:27017/cognitive-support');
      console.log('🔗 Connected to MongoDB');
      return true;
    } catch (error) {
      console.error('❌ Connection failed:', error.message);
      return false;
    }
  }

  async viewAllData() {
    if (!this.connection) {
      console.log('❌ Not connected to database');
      return;
    }

    const db = mongoose.connection.db;
    
    try {
      // Get all collections
      const collections = await db.listCollections().toArray();
      console.log('\n📚 Database Collections Found:');
      console.log('='.repeat(50));
      
      for (const collection of collections) {
        const collectionName = collection.name;
        console.log(`\n📁 Collection: ${collectionName}`);
        console.log('-'.repeat(30));
        
        // Get collection stats
        const stats = await db.collection(collectionName).stats();
        console.log(`📊 Documents: ${stats.count}`);
        console.log(`💾 Size: ${(stats.size / 1024).toFixed(2)} KB`);
        
        // Show sample documents (max 3)
        if (stats.count > 0) {
          console.log('\n📄 Sample Documents:');
          const documents = await db.collection(collectionName).find({}).limit(3).toArray();
          
          documents.forEach((doc, index) => {
            console.log(`\n${index + 1}. Document ID: ${doc._id}`);
            
            // Show key fields based on collection type
            if (collectionName === 'users') {
              console.log(`   👤 Name: ${doc.name || 'N/A'}`);
              console.log(`   📧 Email: ${doc.email || 'N/A'}`);
              console.log(`   🎭 Role: ${doc.role || 'N/A'}`);
              console.log(`   🔐 Provider: ${doc.authProvider || 'N/A'}`);
              console.log(`   📅 Created: ${doc.createdAt || 'N/A'}`);
              
              if (doc.cognitiveProfile && doc.cognitiveProfile.conditions) {
                console.log(`   🧠 Conditions: ${doc.cognitiveProfile.conditions.join(', ')}`);
              }
              
              if (doc.accessibility && doc.accessibility.preferences) {
                console.log(`   ♿ Accessibility: Font-${doc.accessibility.preferences.fontSize}, HC-${doc.accessibility.preferences.highContrast}`);
              }
            }
            
            // Show document structure (truncated)
            const docString = JSON.stringify(doc, null, 2);
            if (docString.length > 500) {
              console.log(`   📝 Structure: ${docString.substring(0, 500)}...`);
            } else {
              console.log(`   📝 Structure: ${docString}`);
            }
          });
          
          if (stats.count > 3) {
            console.log(`\n... and ${stats.count - 3} more documents`);
          }
        } else {
          console.log('   (empty collection)');
        }
      }
      
      // Database summary
      console.log('\n📊 Database Summary:');
      console.log('='.repeat(30));
      const admin = db.admin();
      const dbStats = await admin.command('dbStats');
      console.log(`🗄️  Database: ${dbStats.db}`);
      console.log(`📚 Collections: ${dbStats.collections}`);
      console.log(`📄 Documents: ${dbStats.objects}`);
      console.log(`💾 Data Size: ${(dbStats.dataSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`📏 Index Size: ${(dbStats.indexSize / 1024).toFixed(2)} KB`);
      
    } catch (error) {
      console.error('❌ Error viewing data:', error);
    }
  }

  async searchUsers(query = {}) {
    if (!this.connection) return;
    
    try {
      const User = require('./models/User');
      const users = await User.find(query);
      
      console.log(`\n🔍 Search Results (${Object.keys(query).length > 0 ? JSON.stringify(query) : 'All Users'}):`);
      console.log('='.repeat(50));
      console.log(`📊 Found: ${users.length} users`);
      
      users.forEach((user, index) => {
        console.log(`\n${index + 1}. 👤 ${user.name} (${user.email})`);
        console.log(`   🎭 Role: ${user.role}`);
        console.log(`   🔐 Auth: ${user.authProvider}`);
        console.log(`   📅 Joined: ${user.createdAt}`);
        console.log(`   🕐 Last Login: ${user.lastLogin || 'Never'}`);
        console.log(`   ✅ Active: ${user.isActive}`);
      });
      
    } catch (error) {
      console.error('❌ Search error:', error);
    }
  }

  async close() {
    if (this.connection) {
      await mongoose.connection.close();
      console.log('\n🔌 Database connection closed');
    }
  }
}

// Usage examples
async function main() {
  const viewer = new DatabaseViewer();
  
  if (await viewer.connect()) {
    // View all data
    await viewer.viewAllData();
    
    // Search examples (uncomment to use)
    // await viewer.searchUsers({ role: 'resident' });
    // await viewer.searchUsers({ authProvider: 'google' });
    // await viewer.searchUsers({ 'cognitiveProfile.conditions': 'adhd' });
    
    await viewer.close();
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = DatabaseViewer;
