import { HandleRequest, HttpRequest, HttpResponse, Kv } from "@fermyon/spin-sdk"

interface Counter {
    count: number;
}

export const handleRequest: HandleRequest = async function(request: HttpRequest): Promise<HttpResponse> {

    const store = Kv.open("default");

    let counter: Counter = store.getJson("counter") ?? { count: 0 };
    counter.count++;
    store.setJson("counter", counter);

    return {
        status: 200,
        headers: { "content-type": "text/plain" },
        body: JSON.stringify(counter)
    }
}
