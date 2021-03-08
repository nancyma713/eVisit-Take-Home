### How does your code work?
- Requests are saved in a hashmap as a key and values are incremented with every request handled. The ```top100()``` function takes the keys of the hashmap and sorts them by decreasing value, returning the top 100 requests. The ```clear()``` function resets the requests to an empty hashmap.

### Why did you choose this approach?
- Hashmaps have quick lookup and insertion so I chose to use a hashmap to store the requests and their counts for this problem. Since the ```requestHandled(ipAddress)``` function would by far get called the most often, a quick runtime is needed here.

### What other approaches did you decide not to pursue?
- I also considered a heap for storing the request values, but with that, I think the ```requestHandled(ipAddress)``` function would have had at least a linear runtime each time it's called. The ```top100()``` function would have a constant runtime, but I would assume that the ```requestHandled(ipAddress)``` function would get called a lot more often (definitely millions of times) while the ```top100()``` function would be called fewer times.

### What is the runtime complexity of each function?
- ```requestHandled(ipAddress)```: O(1) - hashmap lookup is constant
- ```top100()```: O(nlogn) - sorting function will be loglinear
- ```clear()```: O(1) - resetting requests map is constant