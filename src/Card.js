import React from "react";
import './card.css';
 
const Card = ({ item }) => {            
    // destructuring props
return (

<div className="news-article-container">
 <div className="row justify-content-center">
   {item.map((Val) => {
     return (
            <div classname= "news-article-container">
              <article key={Val.header} className="article-header">
                  <h2 className="news-source">{Val.source}</h2>
                  <time className="publish-date">{Val.publishDate}</time>
                <div className="article-content">
                  <h3 className="article-title">{Val.title}</h3>
                  <div className="article-summary">
                    <p className="article-excerpt">{Val.excerpt}</p>
                    <figure className="article-image">
                      <img src={Val.image} alt={Val.imageAlt} />
                    </figure>
                  </div>
                </div>
                <div className="read-more-link">
                  <span className="read-more-text">I want to read more</span>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9856677c5087ee8e1b6153d4c4d82acce4ddb4b743c7620a8762068332b83a76?apiKey=52eea72604094b7ab9869133110354af&" alt="" className="read-more-icon" />
                </div>
                <footer className="article-footer">
                  <div className="article-scores">
                    <p className="interesting-score">
                      <strong>Interesting or not score:</strong>{" "}
                      <span className="interesting-score-value">{Val.interestingScore}</span>
                    </p>
                    <p className="personalized-score">
                      <strong>Interesting for you:</strong>{" "}
                      <span className="personalized-score-value">{Val.personalizedScore}</span>
                    </p>
                  </div>
                  <div className="article-actions">
                    <button className="share-button">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec20c781ee24807dc8c24bd74129eb29cbbf56acbf6f4a9ec8bb5d50190fa8e5?apiKey=52eea72604094b7ab9869133110354af&" alt="Share article" className="share-icon" />
                    </button>
                    <button className="bookmark-button">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ea866390e787e3fa8e4e572d4801f530e3f23da2eb01e4a73dd268c80d92045?apiKey=52eea72604094b7ab9869133110354af&" alt="Bookmark article" className="bookmark-icon" />
                    </button>
                  </div>
                </footer>
              </article>
              </div>
            );
          })}
        </div>
      </div>
   );
  };
  
  export default Card;
