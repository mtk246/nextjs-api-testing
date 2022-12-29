import { useState } from 'react';
import { React } from 'react';

export { GetData };

function GetData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = 'https://famous-quotes4.p.rapidapi.com/random';

    const callApi = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          apiUrl + '?category=all&count=10',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'ce0a849cc9msh972a168303f9c76p183879jsn1568dabd8c01',
              'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
            },
          }
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    }

    const clearApi = () => {
      setLoading(true);
      setData(null);
      setLoading(false);
    }

    return (
      <div>
      <h1>Get Quote</h1>
        <button
          onClick={callApi}
          className="btn btn-primary m-2"
        >
          Call API
        </button>
        <button
          onClick={clearApi}
          className="btn btn-danger m-2"
        >
          Clear API
        </button>
        <p>
        {
          loading &&
          <div class="spinner-border text-primary" role="status"></div>
        }
        {
            data && data.map(( item ) => {
              return (
                <div
                  key={item.id}
                  className="container-fluid border rounded mt-3 mb-3 p-3"
                >
                  <span>
                    Category:
                    <h4>
                      {item.category}
                    </h4>
                  </span>
                  <span>
                    Quote: 
                    <h4>
                      {item.text}
                    </h4>
                  </span>
                  <span>
                    Author: 
                    <h4>
                      {item.author}
                    </h4>
                  </span>
                </div>
              )
            }, [])
          }
        </p>
      </div>
    )
}