
import './App.css';
import Header from './components/Header';
import WeekCard from './components/WeekCard';
import PortfolioCard from './components/PortfolioCard';
import Dictionary from './components/Dictionary';

function App() {
  return (
    <div>
      <Header />

      <main>
        {/* <section className="hero">
          <h2>Liam's Azure Portfolio</h2>
        </section> */}

        <section id="weeks">
          <h3>Terms I Learned</h3>
          <Dictionary dictionary={1} notes="Cloud Computing: The basic idea behind using the cloud, is there is a really big computer somewhere that everyone shares over the internet. The big computer can portion out as much of itself to each person as they need and it can change that amount dynamically. Having a physical computer yourself can have drawbacks. If you need more computing power in the future, you would have to buy new computer parts. Conversely, you are also wasting money if you have a computer that is too powerful for the tasks you need to perform. A personal computer might break as well. But with the cloud you can get just the right amount of computing from the server." />
          <Dictionary dictionary={2} notes="Cloud Storage: The same concept above applies to storage. When your PC runs out of storage, you must buy more and physically install it. The cloud can divvy out as much storage as you need. If in the future you end up needing less, you can cut back and save money. You can upgrade your system as your business grows or as technology advances." />
          <Dictionary dictionary={3} notes="Shared Responsibility Model: If you have your own physical data center, you are responsible for keeping at all running physically with all that entails. When you use cloud services, it is expected that the cloud’s hardware runs smoothly. But what you do with the hardware is generally your own responsibility. For example if you are running a database on Azure, Microsoft is responsible for keeping the db up and running, but if you insert some bad data that breaks the whole program, it is your fault. There are multiple cloud service types, the main 3 being Saas (Software as a Service) PaaS (Platform as a Service) and Iaas (Infrastructure as a Service). The responsibilities can change depending on the context and the service type."/>
          <Dictionary dictionary={4} notes="Microservices: A design pattern based on the idea of breaking a program up into multiple sub programs that work independently of each other. For example, Facebook has different microservices running everything. If they updated the chat microservice and broke it, you might not be able to chat but you can do everything else. Only the chat was updated. Every other part of the website works the same way. Another example is github. All the different things you can do on github are each their own microservice. If there is a cloud disruption that affects pull requests, it won’t be the whole site going down, just the pull request functionality. This philosophy stemmed from big programs worked on by a lot of people. When things get big enough you have to break it up into smaller pieces for individual teams to tackle."/>
          <Dictionary dictionary={5} notes="Containerization: When deploying your program, it could be deployed on a thousand different machines with a million different setups. You can’t be sure the computer your program is running on will have the correct libraries, etc. So you put the program and everything needed to run it in a container and it will run anywhere; on any machine or the cloud. Different AI models might have very different dependencies, so each model will have its own container with the necessary libraries."/>
          <Dictionary dictionary={6} notes="Orchestration: The process of managing multiple containers. The most popular tool is Kubernetes. Orchestration includes: Scaling - automatically adding or removing instances based on traffic and resource usage. Load Balancing - distributing traffic and usage evenly across instances. Updates and Rollbacks - automatically updating and being able to roll back if something goes wrong. Health Management – Detects failing services and restarts or replaces them automatically. Artificial Intelligences can make great use of all of these. ChatGPT might see spikes in traffic now and then, and when it does it handles them with extra instances. The server scales up and then back down when the spike is finished."/>
          <Dictionary dictionary={7} notes="Continuous Deployment (CD): Fully automated deployment of code changes. When code is committed, it is automatically tested and if it passes all the tests, the program is rebuilt and redeployed, all automatically. This eliminates human error. A new AI model might be introduced, or one might be retrained with new data. The update will be done automatically with CD. Often a new model will be rolled out to 5-10% of users, and if user metrics are good it will be rolled out further.

This all comes together to make a system that handles Artificial Intelligences, their development, updating, deployment, and use without downtime or environment incompatibilities.
"/>

        </section>

        <section id="weeks">
          <h3>Learning Timeline</h3>
          <WeekCard week={1} notes="I learned the basics of cloud concepts." image="https://k21academy.com/wp-content/uploads/2023/02/single-vm-diagram-scaled-e1732016769169.webp"></WeekCard>
          <WeekCard week={2} notes="I did some more in-depth research" image="https://cdn.discordapp.com/attachments/1419005342552948886/1493697390299971715/inft5.png?ex=69dfe999&is=69de9819&hm=e4b5b728f4a4c805da66a2512297a109350bc3de5b84fff30f4750decf4977a3&"></WeekCard>
          <WeekCard week={3} notes="I did a small project as a proof of concept. I set up my own Azure compute " image="https://cdn.discordapp.com/attachments/1419005342552948886/1493695004642902118/inft2.png?ex=69dfe760&is=69de95e0&hm=5167382b655062171b64b392fa4a67b55696c593a330cd6ee3d7724c80c4dfc2&"></WeekCard>
          <WeekCard week={4} notes="I learned more about cloud-native AI" image="https://cdn.discordapp.com/attachments/1419005342552948886/1493697379147321464/inft4.png?ex=69dfe996&is=69de9816&hm=ddbf0a84d1485c014b24ef0d7ec8279a316bc9ed6c448602a182571ff6c35fd3&"></WeekCard>
          <WeekCard week={5} notes="I learned about the Azure CLI. I practiced using it." image="https://cdn.discordapp.com/attachments/1419005342552948886/1493695021440831708/inft3.png?ex=69dfe764&is=69de95e4&hm=6db4eaf8db11860d92f2eaa37f07e482ff3a9cabaefb9d02cd304e48ad3d953b&"></WeekCard>
          <WeekCard week={6} notes="I reflected on what I learned so far." image=""></WeekCard>
          <WeekCard week={7} notes="I studied for the Azure-900 certification. I haven't taken the test yet though." image="https://learn-attachment.microsoft.com/api/attachments/06f9e383-d289-4a22-a0fa-c051f3ed5642?platform=QnA"></WeekCard>
          <WeekCard week={8} notes="This website. I made this portfolio and hosted it with Azure. I learned a lot about cloud hosting." image="https://cdn.discordapp.com/attachments/1419005342552948886/1493705497801527366/inft7.png?ex=69dff126&is=69de9fa6&hm=1fce0855966f944b0bc89546bbaf130cced385cbfb82dabd7a72d13db0e21b24&"></WeekCard>
        </section>

        <section id="portfolio">
          <h3>Portfolio Highlights</h3>
          <PortfolioCard
            title="React + Azure Demo"
            description="This website. Minimal React portfolio deployed on Azure Static Web Apps." image="https://cdn.discordapp.com/attachments/1419005342552948886/1493698641792340010/inft6.png?ex=69dfeac3&is=69de9943&hm=1c89cc6157c83e2ea1e41b6e756a1e0615596bdc99b47dc55eb5e6c2001e752d&"
          />
        </section>
      </main>

      <footer>
        <p>©2026 LIAM'S TECHNOLOGY PORTFOLIO</p>
      </footer>
    </div>
  );
}

export default App;