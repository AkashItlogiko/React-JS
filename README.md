![image](./public/Screenshot%20from%202023-12-20%2018-21-35.png)

[useContext Hook](https://www.youtube.com/watch?v=RYeRn5_xL7k&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8&index=57)

amra ai oporer image theke dekhte parchi amader akahene 4ta component ache aita
hote pare jekono component and ai 4ta component ar moddhe parent component2 ta
hocche component1 ar child component3 ta hocche component2 ar child and
component4 hocche component3 ar child akhon ame jodi component1 thaki component4
ar moddhe kno data pass korte cay tayle amader props akera aivabe data pass
korte hobe.

## component1->component2->component3->component4

and aitaki bole `Prop drilling` mane prop ke driling kore amdaer component1
thaki componet4 ar maje niya jate pari..

kintu ay ai `Prop drilling` ar akta problem hocche jodi ami component1 thaki
component4 ar moddhe sorasori data ba string ta pass korte chai.

## component1->component4 ta amra probo na

## Prop drilling ar ai problem take amra `useContext` Hook ar maddhome solve korte pari.

`useContext`Hook ar sahajje amra global state set korte pari...jemon ami jodi
amader parent component ar moddhe global state create kore dei tahole amader ai
parent component ar under aaa joto gulo child componet thakbe oi child component
gulo kono prop drilling charai sorasori oi global state ar value take access
korte parbe componet1 theke sorasori componet4 oi state ar value ta ke access
korte parbe kono prop drilling charai useContext Hook ar maddhome.

`useContext`

# hook take use korar jonno amader ai 3 ta stap follow korte hobe.

step1: create Context . step2: wrap childs components with context provider from
parent component . step3: access global state by useContext Hook from child
component.
