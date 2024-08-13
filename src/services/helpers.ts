interface IFetchOptions {
    method: string
    headers: Record<string, string>
    body?: string
  }

const checkResponse = (res: Response) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };
  
export const request = (url: string, options?: IFetchOptions) => {
  return fetch(url, options).then(checkResponse);
}