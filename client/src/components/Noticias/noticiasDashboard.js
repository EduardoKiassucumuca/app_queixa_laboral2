import MyMenAdmin from "../Dashboard/MyMenuAdmin";
import MySideNavAdmin from "../Dashboard/MySideNavAdmin";
import NoticiasPanel from "./containerNoticias";

function NoticiasDashboard() {
  return (
    <>
      <MyMenAdmin />
      <MySideNavAdmin />
      <NoticiasPanel />
    </>
  );
}
export default NoticiasDashboard;
