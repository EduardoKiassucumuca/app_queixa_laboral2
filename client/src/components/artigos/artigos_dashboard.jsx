import MyMenAdmin from "../Dashboard/MyMenuAdmin";
import MySideNavAdmin from "../Dashboard/MySideNavAdmin";
import ArtigosPanel from "./container_artigos";

function ArtigosDashboard() {
  return (
    <>
      <MyMenAdmin />
      <MySideNavAdmin />
      <ArtigosPanel />
    </>
  );
}
export default ArtigosDashboard;
