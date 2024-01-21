import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card
        key={id}
        my={4}
        mx={4}
        p={5}
        cursor="pointer"
        backgroundColor={"#71C9CE"}
        color={"#E3FDFD"}
      >
        <VStack>
          <Heading size={"md"} color="whiteAlpha.900">
            {title} ({year})
          </Heading>
          <Text>{author}</Text>
          <Image w={24} src={`http://localhost:8000/${image}`} />
          <Text p={2}>
            <span>Publisher: </span>
            {publisher}
          </Text>
        </VStack>
      </Card>
    </Link>
  );
}
