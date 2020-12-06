export  const Fetcher = async (url: string) => {
    const res = await fetch(url);
  
    if (!res.ok) {
      throw Error("error! :( ");
    }
  
    const data = await res.json();
    return data;
  }