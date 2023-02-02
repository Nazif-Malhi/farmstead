import Card from "react-bootstrap/Card";

function BlogCard({ img, title, para }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={img}
        alt="img"
        style={{ width: "100%", height: "170px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{para}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
