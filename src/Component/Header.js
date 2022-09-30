function Header(){
 const menuItem = [
     {
        'id':1,
        'menu_name':'Home'
     },
     {
        'id':2,
        'menu_name':'About',
     },
     {
        'id':3,
        'menu_name':'Services',
     },
     {
        'id':4,
        'menu_name':'Shop',
     },
     {
        'id':5,
        'menu_name':'Pages',
     },
     {
        'id':6,
        'menu_name':'Blog',
     },
     {
        'id':7,
        'menu_name':'Contact',
     }
 ];
 const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];


 return (<>
   <header>
    <nav>
    {menuItem.map(item => (
        <a href="#" key={item.id}>{item.menu_name}</a>
      ))}
    </nav>
   </header>
    
 </>)
}
export default Header;