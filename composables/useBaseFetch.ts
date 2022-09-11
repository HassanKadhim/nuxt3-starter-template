const api = "https://jsonplaceholder.typicode.com/posts";

export const useBaseFetch = (url, body = {}, method = "GET") =>
  new Promise((resolve, reject) =>
    resolve(
      useAsyncData(
        api + url,
        () =>
          $fetch(api + url, {
            method: method,
            body: method.toLocaleLowerCase() == "get" ? null : body,
            headers: {
              Authorization: useCookie("tokenCookie").value
                ? `Bearer ${useCookie("tokenCookie").value}`
                : null,
            },
          }),
        { initialCache: false }
      )
    )
  );
