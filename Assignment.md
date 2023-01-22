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

## React Portals

> What is the problem that we are trying to solve with portals?

- example without portals :-

        return <>
                <My-modal />
                <InputForm />
             </>


        the following will render on dom as (assume)

            <section>
                <h2> some other content </h2>
                <div class="my-modal">
                    modal content
                </div>
                <form>
                    form content
                </form>
            </section>

- semantically and from a 'clean code ' prespective, having a nested moadls is not a good practice . Its an overlay to entire page (similar for side-drawers , other dialogs , etc )

- with Portals we can have modals render somewhere else on dom rather than nesting and Without changing React component structure
- ex -

             <section>
                <h2> some other content </h2>
                <div class="my-modal">
                    modal content
                </div>
                <form>
                    form content
                </form>
            </section>

> What features does React- DOM library get us.What does adapter mean?

- it connct react with web
- it provide many api to work with dom
- render , create root , createPortal, etc are some of API

- adpter is a translation layer that connects two different interfaces together.
- in case of react its react-dom
- react-dom is lobrary that conncts dom ui with rect api

> What does React.createPortal() take as input. What is the second argument?

- first is component we want to render as Portal
- other is element container where we want component to render
