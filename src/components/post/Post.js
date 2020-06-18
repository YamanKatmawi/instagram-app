import React from "react";

const Post = (props) => {
  const arr = props.data.map((item) => {
    const { id, name, url } = item;

    return <img src={url} alt={name} key={id} />;
  });

  return <React.Fragment>{arr}</React.Fragment>;
};

export default Post;
