import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

function BlogCard({ img, title, para }) {
  const [localization, setLocalization] = useState(null);
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang !== undefined && lang != null) {
      setLocalization(lang);
    }
  }, [localization]);
  return localization === "en" || localization === "ur" ? (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={img}
        alt="img"
        style={{ width: "100%", height: "170px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{para[localization]}</Card.Text>
      </Card.Body>
    </Card>
  ) : null;
}

export default BlogCard;
