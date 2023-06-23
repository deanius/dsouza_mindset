import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { marked } from "marked";

const intro = `Thank you for taking the time. 

Checking in with your mental health is so essential and often overlooked. 

How are you feeling today?`;

const help = `When in doubt, never be afraid to seek help.  
If you or a friend are ever in need, there are support systems in place that you can use.

> 💡 Please do keep in mind that certain hotlines may end up in the police being sent to the caller's house. This may put the person in more danger, depending on the situation. This shouldn't be a reason to not make a call; it's simply providing situational awareness.

Depending on your country of residence, there are different options and numbers to call.

[Get Help](https://www.psycom.net/get-help-mental-health) provides a thorough list of information for those in a mental health crisis.
`;

const overwhelmed = `It's natural to feel overwhelmed from time to time. The world around you is so chaotic all the time. Trust me, you're not being dramatic.

You're doing fine!

Take a few minutes, if you can, and just breathe.

It's recommended that you ground yourself and be aware of your surroundings. Unfortunately, not all of us have someone around to help when we feel overwhelmed. Thankfully, there's a lot that you can do to get yourself back to a baseline normal.

Here are some things that have helped me:

- Take a nice, long walk without music. Pay attention to your environment, embrace the weather and the sounds. You're alive and walking. Let that feeling sink in.

- Draw yourself a bath. Use some warm water, incense or candles, a good podcast or playlist, and anything else you need to feel completely soothed.

- Do grounding or breathing exercises (attach YouTube link). Breathe in as you count to 4, hold your breath for 4 seconds, and exhale for 5 seconds. Repeat.

- Drink some tea. If you can get yourself to a nice café, even better, but if not, boil some water and make yourself a glass of tea. In the words of Arthur Wing Pinero - *"Where there's tea, there's hope."*

- Masturbate. It's healthy, it's simple, and easy enough to do. You'll feel relaxed once you're done. Post-nut clarity is a real thing.

- Take a nap. Napping is hard when I'm stressed because my mind doesn't shut up, but if you can get some shut-eye, it's a great way to reset yourself.

- Get some animal therapy. If you have a friend with a cat or a dog or anything else, spend time with them. Animals understand what we go through and often know how to counterbalance it.


The bottom line is - we all have these moments. Life is overwhelming, whether in school, a job, or your family. We have a lot of demanding expectations set upon us, and it's insane to live up to them all the time. It can get so stressful, and I feel you.

The important takeaway to remember is that you will get past this. However intense it feels now, it is temporary. Time heals all things. But don't disregard how important taking breaks is. We all need a break from time to time.

You're doing great, and I'm so proud of you!

And if you can't take it from me, maybe the [God of Thunder can help](https://www.youtube.com/watch?v=QfySIkxdBDw).`;

const depressed = `Some days, getting out of bed is the last thing you want to do. I've been there. I probably was there last week. But let me tell you something: you're not lazy, and you're not a failure.

You're going through a tough time, and your mind is likely taking it out on your body. It's okay to recover at your own pace.

Even though it may seem like life is pointless and you have nothing to live for, I can assure you that people love you. You're important, your feelings are valid, and you impact people on a level you may not even realize. The universe needs you to take care of yourself.

No matter what headspace you're in, you deserve love.

If you don't have anyone to remind you of that, know that I'm here for you.

I struggle with depression too. It can be chronic or catch you off guard, but whatever form it takes, it can take a toll.

Over time, I've found a few ways to bring myself back to a regular mental state when I feel depression creeping in.

- Get out of bed. I know it's hard; staying in bed and doom-scrolling seems so ideal right now, but getting your body moving is essential. The hardest part is getting up; after that, take it one step at a time. I believe in you, and I'm rooting for you!

- Take care of yourself. Depression can make it easy to forget about self-care, including eating and hygiene. Take a shower, wash your face, shave, brush your teeth. When you look good, you feel good. You'll also feel proud of yourself for putting in the effort and more confident to tackle what you want.

- Eat your favorite food. Try to choose healthy options, but if you're craving that cheesecake, go for it. Just make sure to moderate and not replace your emotions with food.

- Take care of your loved ones. I know it can be challenging, especially if you live with family and have family issues. However, surrounding yourself with people you love can make you feel so much better. This can even extend to friends or pets.

- Take your meds. I know it can feel like they're not working, or even pointless. But not taking your medication might make you feel worse. Write it on your mirror, put post-it notes, set an alarm, have a family member or friend remind you. Make it a habit.

- Reach out, ask for help. You'll be surprised at how many people respond. One of the hardest decisions I had to make when dealing with depression was talking to my friends about it and admitting I needed help. I was amazed by how validated I felt when my friends started sharing their stories as well, and it made me feel less alone. You're human, and what you're feeling is very human. If you can convey this to other humans, it will likely calm you down and give you hope to move forward.

- Acknowledge your progress. You've come a long way, and it's easy to forget that when you're feeling depressed. You're not a loser, and you're not a failure. You're a survivor. You've survived the worst that life has thrown at you so far and will continue to do so. A few years ago, you could only dream of where you are now. Let that sink in.

- Journal. When your mind is full, writing is the best medicine. Take a pen and paper and just get all your thoughts out. Avoid technology for this; go old-school. Just write whatever you want, however long you want. Get it all out.

Overall, depression and fatigue are tough to battle. Oftentimes, no one will truly understand what you're going through. However, I want you to know that I do. While I won't claim to know exactly how you're feeling, I have felt a semblance of it many times in life. Remember that you are not alone, and there is always hope for recovery.

Just do your best, that's all you can really do. If you can't manage to do all of the things on this list, that's totally okay. Take it one day at a time, one step at a time. You've got this!`;

const scared = `Anxiety is a conniving little devil; it can sneak up on you when you least expect it. One of the most important things that has helped me is identifying my triggers. Anxiety's greatest weakness is rational thinking, so ask yourself questions to get to the bottom of your anxiety:

- What are you anxious about?
- What caused your anxiety?
- How is your anxiety manifesting itself through your body?
- How would you label the emotion you're feeling right now?

All of these are questions you should ask yourself when you're spiraling out of control. Trust me, it gets easier the more you do it.

If you feel your anxiety getting worse, here are a few ideas on how to manage it:

- Box Breathing - Breathe for 4 counts, hold for 4 counts, release for 4 counts. Even your breathing pace, and your heart will soon follow. It calms you down in the moment and equips you to address your feelings.

- Play the name game - Give your brain a fun activity. Try to name 5 things you can see, 4 things you can hear, 3 things you can smell, 2 things you can touch, and 1 thing you can feel. It's a fun way to distract yourself from your thoughts and give your senses something else to focus on.

- Assign characters to your thoughts - A common practice is to listen to your thoughts in funny voices. Most people start with Mickey Mouse. When you get anxious thoughts, train them to be heard through sounds that you find ridiculous. It highlights how ridiculous those thoughts are and makes it easier for you to ignore them. I promise you, I laughed at this method, but once I started giving my thoughts personalities, it got a lot easier to identify where they're coming from.

As you're doing this, remember to focus on your triggers. Here are a few common triggers for anxiety:

- A stressful work environment

- School or college assignments or exams

- Genetics - anxiety could run in your family

- Side effects from certain medications

- A trauma response

- Exposure to a phobia, such as agoraphobia (fear of crowds or open spaces) or claustrophobia (fear of tight, compact spaces)

- A chronic illness

- Excessive stimulant consumption like coffee or energy drinks

- Marijuana or mind-altering drugs (psychedelics)

I've found meditation to be a very helpful medium for navigating anxiety. It takes some time to believe in it, but a good meditation practice can work wonders.

You can also try guided meditations; here are a few options:

https://www.youtube.com/watch?v=Jyy0ra2WcQQ

It's important to remember that anxiety attacks and panic attacks are two different things. Having experienced both of them in my life, they can have similar symptoms but show up very differently.

During these attacks, it's normal to feel a sense of dread or fear, a pounding heart, difficulty breathing, chest pain, lightheadedness, and irrational thoughts. Anxiety attack symptoms usually intensify over time, while a panic attack seems to come all at once. Here's how to distinguish between them:

** Add sources **

How do you calm yourself during an anxiety or panic attack?

- Take deep breaths. It calms your heart and lungs.
- Splash water on your face. Feeling the sensation will keep you in reality.
- Massage your scalp. It's an easy form of stress relief.
- Take an Epsom salt bath. Relax your muscles.
- Listen to calming music and paint. Expressing yourself is very beneficial when you’re spiraling.
- Exercise. Do something physical, so that you get your blood flowing.

These all sound very basic, but sometimes your body just needs to go back to the basics. Find out what works for you.

Most importantly, tell yourself that you are okay. It will be okay. Promise yourself that you will be okay, and then keep your promise. You got this.`;

const numb = `This happens to me a lot too - feeling like you're nowhere, like you're apathetic, in a state of emotional and mental numbness. This can sometimes be a result of burnout - when you overextend yourself and then just burn through your energy. These types of feelings affect your ability to keep a job, maintain relationships, and enjoy life.

Everyone experiences numbness from time to time. It's called situational apathy, and it's completely normal. You are not broken.

If you want to get out of this, you have to give your mind new memories and emotions to latch onto. You can start by getting out of bed and walking around your room. Motivation isn’t something to wait for; it's something to work for. Get yourself moving and give your brain fun exercises.

You can watch something on YouTube that is nostalgic. For me, it's usually movies. I love a good Marvel marathon when I feel nothing because those movies help me feel things. I watch movies from my childhood (Disney, Harry Potter), so I can take myself back to a happier place and give my brain some juice.

Tracking your success also helps tremendously. You are an incredible human being, living an amazing life, and you need to remember it. Success and confidence can initiate a positive flow of emotions that can pull you out of your slump. Start journaling and reading. Both of these are good mental hobbies. I maintain a gratitude journal where every night, I write 3 things I am grateful for. And over the years, it is incredible to see how much I’ve progressed.

A support system is also key. I am often very honest with my support system, and they have pulled me out of some rough spots. Having a support system of women is especially powerful because they usually understand what you need and know how to bring you back. Women encounter these moments quite frequently and have long since identified how to get themselves through it (it's a survival mechanism for them). But men are usually ignored on the emotional front. As a man, let me tell you fellow men, expressing your emotions is normal, healthy, and very courageous. You will not be seen as a weaker person for talking about how you feel. Begin to get comfortable with your emotions and acknowledge that you are human for experiencing them.

If you're feeling lost about where you are in life, then it's time to get off social media. Don't compare your insides with other people's outsides. All you see is their highlight reel, and you don't need that when you're feeling lost. Remember, life is long, and it is never too late to find what you're meant to do. I discovered what I wanted to do at 27, and by 30, I was more lost than I was before. But I learned to enjoy it. Enjoy the feeling of not knowing your next move and just traversing through life. It's very humbling.

Here's a video I often revisit when I feel hopeless - it's called "[Wear Sunscreen.](https://www.youtube.com/watch?v=KdQbb3FXSEI)"

I hope you feel a little more confident now. You’re an amazing human being, and I believe in you.`;

const positive = `That's amazing! We all like to feel positive everyone once in a while. And luckily, you just need one thing - an open mind.

When I want to feel positive, I try to look at the achievements of humans and how far we’ve come. We can all be proud of humanity's accomplishments because it's a representation of us. It inspires us to be better and do better.

Here's one of [my favorite YouTube videos](https://www.youtube.com/watch?v=Y0Zq6Q2m-ig) of a couple who took a drone on their honeymoon for an amazing project. It reminds me how much of this gorgeous planet is left to explore and how much I have to live for.

If you're looking for good reading material, why not try [Good News Network](https://www.goodnewsnetwork.org/more/about-us/)? It's a news media outlet that only focuses on the good out there because, let's face it, you're in no shortage of negative, hate-filled media. They've been publishing good news since 1997, so there's plenty of content to rebuild your faith.

If you're looking for books, I'd recommend:

- [Furiously Happy](https://www.goodreads.com/book/show/23848559-furiously-happy?ref=nav_sb_ss_1_12) - A ridiculously funny book about a woman who is determined to make herself happy no matter what the universe throws at her
- [Greenlights](https://www.goodreads.com/book/show/52838315-greenlights?ac=1&from_search=true&qid=D3jJ1hwU2q&rank=1) - Matthew McConaughey covers the early years of his adolescence and adulthood, following a simple philosophy - *"Just keep livin'."*

Compliments are an excellent way for you to share the love. Tell your friends what you love about them. Tell your parents and your siblings that you love them. Give a compliment to a stranger at the bus stop or a coffee shop. Kind words lead to a warm heart.

You can also embrace the act of gift-giving. Know a friend whose birthday is coming up? Search for some fun gifts for them. Humans can surprisingly justify the cost of something if they know it’ll make someone’s day, so go ahead and spend. Make someone's day. The love will return to you tenfold. If you’re short of cash, why not write a postcard? I recently started sending my friends postcards, and it's honestly such a fun exercise, and you can look forward to them receiving it.

If you want to write to yourself, then try [FutureMe.org](https://www.futureme.org/). I use this at least twice a year. You can send letters to your future self. Its an amazingly reliable way of self-reflection. 

If you want to feel the love in person, volunteering is a great step. Look at youth shelters, soup kitchens, food banks, festivals coming up. Get to know your community and the people around you. Become a foster parent to some animals, or a big brother/big sister mentor for kids without role models. You can make a difference. Just start small and watch the ripple effect of your decisions spread through humanity.

The world is your playground, and you've got plenty of rounds to play the game!

Spread the love!`;

const Card = ({
  alert,
  id,
  response1,
  response2,
  response3,
  response4,
  response5,
  response6,
  index,
  setIndex,
}: any) => {
  const [markdown, setMarkdown] = useState(intro);

  useEffect(() => {
    const html = marked(markdown);
    if (index > 0)
      document.getElementById("markdown-content")!.innerHTML = html;

    if (index === 2) setMarkdown(help);
    if (index === 3) setMarkdown(overwhelmed);
    if (index === 4) setMarkdown(depressed);
    if (index === 5) setMarkdown(scared);
    if (index === 6) setMarkdown(numb);
    if (index === 7) setMarkdown(positive);
    else null;
  }, [index, markdown]);

  return (
    <div className={styles.card}>
      {index > 0 && (
        <>
          <div id="markdown-content"></div>
          {response1 && (
            <div className={styles.options}>
              <span
                className={styles.option}
                onClick={() => {
                  setIndex(response1.location);
                }}
              >
                {response1.text}
              </span>
              <span
                className={styles.option}
                onClick={() => {
                  setIndex(response2.location);
                }}
              >
                {response2.text}
              </span>
              {response3 && (
                <span
                  className={styles.option}
                  onClick={() => {
                    setIndex(response3.location);
                  }}
                >
                  {response3.text}
                </span>
              )}
              {response4 && (
                <span
                  className={styles.option}
                  onClick={() => {
                    setIndex(response4.location);
                  }}
                >
                  {response4.text}
                </span>
              )}
              {response5 && (
                <span
                  className={styles.option}
                  onClick={() => {
                    setIndex(response5.location);
                  }}
                >
                  {response5.text}
                </span>
              )}
              {response6 && (
                <span
                  className={styles.option}
                  onClick={() => {
                    setIndex(response6.location);
                  }}
                >
                  {response6.text}
                </span>
              )}
            </div>
          )}
        </>
      )}
      {alert && <h2>{alert}</h2>}
    </div>
  );
};

export default Card;
