import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
function Home() {
  // const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  return (
    <>
      <UserSearch />
      
      <UserResults />
    </>
  );
}
export default Home;
