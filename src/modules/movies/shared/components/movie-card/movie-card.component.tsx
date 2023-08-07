import {
  Box,
  Flex,
  useColorModeValue,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { Movie } from "../../model/movie";

interface IMovieCardProps {
    movie: Movie
}

const MovieCardComponent: FC<IMovieCardProps> = ({movie}) => {

  const [hovered, setHovered] = useState(false);
  const titleColor = useColorModeValue("red.500", "red.700");
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  return (
    <Box alignItems="center" justifyContent="center" ml={3}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="xs"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          filter={hovered ? "brightness(0.6)" : "none"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={movie.images[0]}
          alt={`Picture of ${movie.name}`}
          roundedTop="lg"
          height={"sm"}
          width={"sm"}
        />
        {hovered ? (
          <Icon
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            as={MdPlayCircleOutline}
            w={"20"}
            h={"20"}
            color={"white"}
            top={"150px"}
            left={"120px"}
            position={"absolute"}
          />
        ) : (
          ""
        )}
      </Box>
      <Box  maxW="xs">
        <Flex mt="1" justifyContent="center" alignContent="center">
          <Text
            fontSize="22"
            fontWeight="medium"
            as="h4"
            lineHeight="tight"
            isTruncated
            colorScheme={"red"}
            color={hovered ? titleColor : "initial"}
          >
            {movie.name}{" "}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default MovieCardComponent;
