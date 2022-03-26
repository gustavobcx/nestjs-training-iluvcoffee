# Config

Add to etc/hosts

```
  127.0.0.1  mongo1
  127.0.0.1  mongo2
  127.0.0.1  mongo3
```

Add to mongoose connection

```js
mongoose.connect('mongodb://mongo1:27017,mongo2:27018,mongo3:27019/dbname', {
  useNewUrlParser: true,
  replicaSet: 'rs0', // We use this from the entrypoint in the docker-compose file
});
```

# Ref

https://gist.github.com/harveyconnor/518e088bad23a273cae6ba7fc4643549
