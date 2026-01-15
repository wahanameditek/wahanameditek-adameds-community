// Authenticate as root user first (uses env variables from docker-compose)
db = db.getSiblingDB('admin');
db.auth(process.env.MONGO_INITDB_ROOT_USERNAME, process.env.MONGO_INITDB_ROOT_PASSWORD);

// Switch to target database and create application user
db = db.getSiblingDB('adameds_v3');
db.createUser({
  user: 'engineer_adam',
  pwd: 'resman56adam',
  roles: [
    {
      role: 'readWrite',
      db: 'adameds_v3'
    }
  ]
});

db.mycollection.insertOne({
  name: 'Initial Data',
  status: 'active',
  created_at: new Date()
});

db.mycollection.createIndex({ name: 1 });