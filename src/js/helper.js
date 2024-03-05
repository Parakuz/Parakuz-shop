export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await fetchPro;
    const data = await res.json();
    // console.log(res);
    // console.log(data);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};
