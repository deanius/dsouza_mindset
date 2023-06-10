import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Common/Buttons/Button";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";
import { marked } from "marked";
import Divide from "../components/Common/Divide/Divide";

const text = `### What the impact of a story?

It has always been my dream to tell stories, and everything you see before you today is a reflection of that. When I was growing up, stories were my safety blanket. They made me feel less alone as I was pulled into the world of books, and by extension, into worlds of fantasy, magic, fiction, science, philosophy, mystery, and love. Books helped me feel things, or rather they showed me that my feelings were normal.



I firmly believe that stories have the power to unite the world. They are the threads that connect generations, and as they are passed down, they attain a sense of immortality, uniting the past, present, and future. Every storyteller, every artist, every creator intrinsically knows this. My life is a series of stories, some that I live through, some that I passively experience, and they’re aching to be told. 

We all have a story, a story that is simultaneously unique and unifying. It can isolate us until we share it, and then it unites us. In a world that is so disconnected and fragmented, stories offer a way to build bridges and forge connections. That is the core of why I want to be a storyteller. If I can show at least one person out there that they are not alone, I will die happy.

### So whats your story?

Hi, I'm Dean. I have an artistic ambition combined with an engineering mindset. 

Over the years I’ve been an immigrant, content creator, writer, backpacker, budtender, analyst, software engineer, burger-flipper, semi-professional poker player, film critic, and climber over the years. 

I've resided in Mumbai, Chennai, Boston, Raleigh, and currently, Toronto.

I'm a process improvement specialist. I see my life is a system of processes, my body as a finely tuned machine and my mind as an ever-changing mosaic. I believe that if I can build the right set of systems, I can achieve a level of fulfillment most only dream of. 

I’m a curious soul. I've tried ignorance, and while it can be blissful, I've realized that bliss is better when it's earned. 

I’m a strong supporter of creative arts, expression, women empowerment, the environment and climate change and 


### What’s in a name?

I distinctly remember growing up and always hating my name. Where I’m from (India), no one had a name like mine, and it was always an easy target to poke fun of. Most things rhyme with Dean (most commonly, Mr. Bean). Safe to say, I spent a lot of time despising my name and, as a result, my identity.

However, I eventually learned that my name has a unique history and meaning. Dean is derived from the Greek word δεκανός (dekanos), which means ‘monk or dignitary in charge of ten others’. In most other derivations, ‘Dean’ is used to imply the position of a leader. For example, in a university, the Dean is the headmaster, and in Catholicism, a Dean is the title allotted to the Chief Priest of the Cathedral.

It wasn’t until my young adult years (early 20s) that I started to embrace my name. I realized the value of having a unique name, something that no one else has. A name so nice, you have to say it twice. A name thus begotten, it wouldn’t be forgotten.

It took me a long time to accept what a blessing it is to be different and stand out. My name reminds me that I am not just another face in the crowd. It's an indicator that we should embrace our individuality and differences because that's what makes us who we are. 

It all starts with a name, and I'm damn proud to have mine.


### What the impact you want to have on the world ?

"My impact would be that people learn from me, in a way that they are empowered by what I’ve taught them. So that when they think of what they've learned from me, they no longer think of me. They think of their own base of understanding of how this world works. And so, I become irrelevant.

Because if they say, 'This is true because Dean said so', then I've failed. That's not how you teach someone. That's teaching by authority. 

I want to teach you how to think about the world, and then you say, 'I have a new way to understand the world', and you just run off; you don’t even look back. Because a new level of hunger has descended upon you, and methods and tools to feed this hunger are now accessible to you. 

So my impact would be that others are impacted, and they don't even remember that I had something to do with it.”  

(**************Paraphrased from Neil DeGrasse Tyson)**************

### Why is this so important to you ?

Over my 20s, I have come to understand the value of having a voice. In my teenage years, I did not use my voice much, as I did not think it was necessary. However, in my 20s, I was full of ego-centric and arrogant isms, convinced that I knew how the world worked.

But now, I recognize that my voice is my talent. My ability to articulate my thoughts and bring them into existence is inspiring, not just for me but for others like me. I believe the world needs to hear my voice, and therein, I cannot exit this world without ensuring that my inner voice is heard. 

What you see today is the result of years of hard work - years of self-doubt that I've had to talk myself out of, years of insecurity that I've had to overcome, and years of instilling a strong belief system within myself. 

It all starts with having the right mindset. That's what worked for me, and my goal is to share this mindset with you. As much of it as I can, in as many ways as possible.

I am confident that I have discovered something valuable - a way of living - and I am elated to share it with you.`;

const About = () => {
  const [markdown, setMarkdown] = useState(text);

  useEffect(() => {
    const html = marked(markdown);
    document.getElementById("about-content")!.innerHTML = html;
  }, [markdown]);

  return (
    <Layout title="The Dean Dsouza Mindset - About">
      <div className="aboutText">
        <h1>About Me</h1>
        <p className="subheading">A bit about myself</p>
        <div id="about-content"></div>
      </div>
      <Divide/>
      <div className="formContain">
        <div className="form-inner">
          <ContactForm
            serviceId={process.env.EMAILJS_SERVICE_ID}
            templateId={process.env.EMAILJS_TEMPLATE_ID}
            userId={process.env.EMAILJS_USER_ID}
          />
          <Socials />
        </div>
      </div>
    </Layout>
  );
};

export default About;
