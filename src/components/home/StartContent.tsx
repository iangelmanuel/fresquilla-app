import StartContentComponent from './StartContentComponent'

export default function StartContent (): JSX.Element {
  return (
    <>
      <section className="container my-24 mx-auto md:px-6">
        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="../../../public/img/strawberry1.png"
        />

        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="../../../public/img/strawberry2.jpg"
        />

        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="../../../public/img/strawberry3.jpg"
        />

        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="../../../public/img/strawberry4.jpg"
        />

        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="../../../public/img/strawberry5.jpg"
        />
      </section>
    </>
  )
}
