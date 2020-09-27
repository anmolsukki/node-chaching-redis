var redis = require('redis');
var client = redis.createClient();

// redis connect
client.on('connect', function() {
    console.log('connected');
});

const abc = [{a: 1}, {a: 2}, {a: 3}]

// redis set
client.set('framework', JSON.stringify(abc));

// redis get
client.get('framework', function(err, reply) {
    console.log(JSON.parse(reply));
});

// redis flush
client.flushdb( function (err, succeeded) {
    console.log(succeeded);
});

// Multiple redis key pair set
client.hmset('language', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');

client.hgetall('language', function(err, object) {
    console.log(object);
});

// redis set
client.set('technology', "ReactJS");

// redis exist
client.exists('technology', function(err, reply) {
    if (reply === 1) {
        client.get('technology', function(err, reply) {
            console.log(reply);
        });
    } else {
        console.log('doesn\'t exist');
    }
});

// check keys length
client.keys('*', function (err, keys) {  
    console.log(keys)
});
