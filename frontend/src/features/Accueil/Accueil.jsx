import { ListStory } from "../ListStory/listStory";
import { Publication } from "../publication/Publication";
import { useUser } from "../auth/useUser";

export function Accueil(props) {
  const context = useUser()
  console.log(context);
  
  return (
    <>
      <ListStory />
      <Publication/>
    </>
  );
}
