class Request {
    constructor() {
        this.requests = {};
    }

    requestHandled(ipAddress) {
        if (!this.requests[ipAddress]) {
            this.requests[ipAddress] = 0;
        }
        this.requests[ipAddress]++;
    }

    top100() {
        const keys = Object.keys(this.requests);
        const top = keys.sort((a, b) => {
            return this.requests[b] - this.requests[a]
        }).splice(0, 100).map((k) => {
            return k;
        });

        return top;
    }

    clear() {
        this.requests = {};
    }
}


const request = new Request();

// Check for requests for the day
console.log(request);

// Clear requests at beginning of day
request.clear();
console.log(request);

// Add requests
request.requestHandled("145.87.2.109");
request.requestHandled("145.87.2.109");
request.requestHandled("145.87.2.109");
request.requestHandled("145.87.2.109");
request.requestHandled("145.87.2.106");
request.requestHandled("145.87.2.106");
request.requestHandled("145.87.2.104");
request.requestHandled("145.87.2.103");
request.requestHandled("145.87.2.103");
request.requestHandled("145.87.2.103");

for (let i = 200; i < 301; i++) {
    let ipA = "145.87.2." + i.toString();
    request.requestHandled(ipA);
}

console.log(request);

// List top100 requests
const top = request.top100();
console.log(top);
console.log(top.length);

// Clear requests at beginning of next day
request.clear();
console.log(request);