## JSX limitation and solution

> What is the main limitation of JSX?

- we cannot return adjecent jsx element

        return ( <div >hello </div>
                <div >hello 2 </div> );

        this is incorrect syntax

---

> How do we solve this. Give code example for each solution.

- there are two solution
- first is to wrap them in empty div

            return <div>
                 <div >hello </div>
                <div >hello 2 </div>
            </div>

  in such case we practically return single div

- second way is to render them as array

         return [ <div key="some unique key" >hello </div> ,
                    <div key="some unique key" >hello 2 </div> ]


        when we render elements as array key is mendatory

---

> What is div Soup , please give example

- using div as wrapper to return adjecent element is common practice in react
- This results in many unnecessagy divs without any symentic mening or no structure to our application
- This may sometimes also result in style brake

- THIS is called div soup

- example :

        return (
            <div>
                <div >
                    <div >
                            <h2> hello 1 </h2>
                            <p> abc abc </p>
                    </div>
                    <img src="" />
                </div>
                <div >
                    <div >
                        <h2> hello 1 </h2>
                         <p> abc abc </p>
                    </div>
                     <img src="" />
                </div>
            </div>
        )

---

---

## React fragment and wrapper

> How does wrapper component actually works.

- its a component that returns props.children
- we use this wrapper instead of div

> I found that we can also use react fragments and it works same as wrapper

> Does it add an extra element in the DOM

- NO wrapper don't add any extra element in DOM

---

---

## React fragments

> How does react fragment work.

- its like wrapper provided by react
- we can wrap adjecent element in react fragment

        <React.Fragment>
            <h1>Hello</h1>
            <p> js </p>
        </React.Fragment>

- other syntax , but may not supported by very old version

        <>
            <h1>Hello</h1>
            <p> js </p>
        </>

> Is it similar to wrapper components.

- yes its basically same thing

> Does it add an extra element in the DOM

- no


