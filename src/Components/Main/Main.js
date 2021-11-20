import Comments from "../Comments/Comments";
import { Data } from "../Data/Data";
import expand from "../../Assets/expand.png";

const Main = () => {
  return (
    <div className="MainMainBody">
      {Data.author.name && (
        <div className="CommentBodyUpperBox">
          {/* <img
            className="CommentPageExpandImage"
            src={expand}
            alt="expand.png"
          /> */}

          <Comments
            authorName={Data.author.name ? Data.author.name : "NoNameUser"}
            authorImage={
              Data.author.avatar
                ? Data.author.avatar
                : "ttps://robohash.org/%5Bdeleted%5D"
            }
            authorDescription={
              Data.text ? Data.text : "No Description Available"
            }
          />
        </div>
      )}
      <div className="marginLeft">
        {Data.replies.length > 0
          ? Data.replies.map((el, key) => (
              <div>
                <Comments
                  authorName={el.author.name ? el.author.name : "NoNameUser"}
                  authorImage={
                    el.author.avatar
                      ? el.author.avatar
                      : "ttps://robohash.org/%5Bdeleted%5D"
                  }
                  authorDescription={
                    el.text ? el.text : "No Description Available"
                  }
                />
                <div className="marginLeft">
                  {el.replies && el.replies.length > 0
                    ? el.replies.map((el, key) => (
                        <div>
                          <Comments
                            authorName={
                              el.author.name ? el.author.name : "NoNameUser"
                            }
                            authorImage={
                              el.author.avatar
                                ? el.author.avatar
                                : "ttps://robohash.org/%5Bdeleted%5D"
                            }
                            authorDescription={
                              el.text ? el.text : "No Description Available"
                            }
                          />
                          <div className="marginLeft">
                            {el.replies && el.replies.length > 0
                              ? el.replies.map((el, key) => (
                                  <div>
                                    <Comments
                                      authorName={
                                        el.author.name
                                          ? el.author.name
                                          : "NoNameUser"
                                      }
                                      authorImage={
                                        el.author.avatar
                                          ? el.author.avatar
                                          : "ttps://robohash.org/%5Bdeleted%5D"
                                      }
                                      authorDescription={
                                        el.text
                                          ? el.text
                                          : "No Description Available"
                                      }
                                    />
                                    <div className="marginLeft">
                                      {el.replies && el.replies.length > 0
                                        ? el.replies.map((el, key) => (
                                            <div>
                                              <Comments
                                                authorName={
                                                  el.author.name
                                                    ? el.author.name
                                                    : "NoNameUser"
                                                }
                                                authorImage={
                                                  el.author.avatar
                                                    ? el.author.avatar
                                                    : "ttps://robohash.org/%5Bdeleted%5D"
                                                }
                                                authorDescription={
                                                  el.text
                                                    ? el.text
                                                    : "No Description Available"
                                                }
                                              />
                                              <div className="marginLeft">
                                                {el.replies &&
                                                el.replies.length > 0
                                                  ? el.replies.map(
                                                      (el, key) => (
                                                        <div>
                                                          <Comments
                                                            authorName={
                                                              el.author.name
                                                                ? el.author.name
                                                                : "NoNameUser"
                                                            }
                                                            authorImage={
                                                              el.author.avatar
                                                                ? el.author
                                                                    .avatar
                                                                : "ttps://robohash.org/%5Bdeleted%5D"
                                                            }
                                                            authorDescription={
                                                              el.text
                                                                ? el.text
                                                                : "No Description Available"
                                                            }
                                                          />
                                                        </div>
                                                      )
                                                    )
                                                  : null}
                                              </div>
                                            </div>
                                          ))
                                        : null}
                                    </div>
                                  </div>
                                ))
                              : null}
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default Main;
