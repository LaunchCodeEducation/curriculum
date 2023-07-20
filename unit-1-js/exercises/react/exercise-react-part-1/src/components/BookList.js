export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "google.com";
   let book2 = "";
   let book3 = "";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Nothing here!" />
         <img src={book2} alt="Nothing here!" />
         <img src={book3} alt="Nothing here!" />
      </div>      
   );
}