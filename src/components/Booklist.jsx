// Booklist.jsx
import { useState, useEffect } from "react";

export const Booklist = ({language, getData}) => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
      const result = getData?.(language).then((response) =>
        setBookData(response)
      );
    }, [language, getData]);

  
    return (
      // <>
      // <p>this is {JSON.stringify(bookData)} list component</p>
      // </>

      <ul>
      {bookData === null ? (
        <p>now loading...</p>
      ) : (
        bookData.data.items.map((x, index) => (
          <li>
            <ul>
              <li key={index}>{"タイトル："+x.volumeInfo.title}</li>
              <li key={index}>{"著者："+x.volumeInfo.authors}</li>
              <li key={index}><img src = {x.volumeInfo.imageLinks.smallThumbnail} /></li>
            </ul>
          </li>
         ))
      )}
    </ul>

    );
  };