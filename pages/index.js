import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'
import { Row } from "react-bootstrap";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "recipe" })

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1
  }
}

export default function Recipes({ recipes }) {
  console.log(recipes)

  return (
    <Row xs={1} md={2} lg={3}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}

    </Row>
  )
}