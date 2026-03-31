import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"
import "./App.css"

import photo1 from "./assets/photo1.jpg"
import photo2 from "./assets/photo2.jpg"
import photo3 from "./assets/photo3.jpg"
import photo4 from "./assets/photo4.jpg"
import photo5 from "./assets/photo5.jpg"
import photo6 from "./assets/photo6.jpg"
import photo7 from "./assets/photo7.jpg"
import photo8 from "./assets/photo8.jpg"
import lastmeet1 from "./assets/lastmeet1.jpg"
import lastmeet2 from "./assets/lastmeet2.jpg"
import lastmeet3 from "./assets/lastmeet3.jpg"
import lastmeet4 from "./assets/lastmeet4.jpg"
import lastmeet5 from "./assets/lastmeet5.jpg"
import lastmeet6 from "./assets/lastmeet6.jpg"
import buda1 from "./assets/buda1.jpg"
import buda2 from "./assets/buda2.jpg"
import buda3 from "./assets/buda3.jpg"
import buda4 from "./assets/buda4.jpg"
import buda5 from "./assets/buda5.jpg"
import buda6 from "./assets/buda6.jpg"
import barde1 from "./assets/barde1.jpg"
import barde2 from "./assets/barde2.jpg"
import barde3 from "./assets/barde3.jpg"
import barde4 from "./assets/barde4.jpg"
import barde5 from "./assets/barde5.jpg"
import barde6 from "./assets/barde6.jpg"
import pre1 from "./assets/pre1.jpg"
import pre2 from "./assets/pre2.jpg"
import pre3 from "./assets/pre3.jpg"
import pre4 from "./assets/pre4.jpg"
import pre5 from "./assets/pre5.jpg"
import pre6 from "./assets/pre6.jpg"
import rot1 from "./assets/rot1.jpg"
import rot2 from "./assets/rot2.jpg"
import rot3 from "./assets/rot3.jpg"
import rot4 from "./assets/rot4.jpg"
import rot5 from "./assets/rot5.jpg"
import rot6 from "./assets/rot6.jpg"
import first1 from "./assets/first1.jpg"
import first2 from "./assets/first2.jpg"
import first3 from "./assets/first3.jpg"
import first4 from "./assets/first4.jpg"
import photo03291 from "./assets/03291.jpg"
import photo03292 from "./assets/03292.jpg"
import c03101 from "./assets/c03101.jpg"
import c03102 from "./assets/c03102.jpg"
import c03111 from "./assets/c03111.jpg"
import c03112 from "./assets/c03112.jpg"
import c03121 from "./assets/c03121.jpg"
import c03122 from "./assets/c03122.jpg"
import c03131 from "./assets/c03131.jpg"
import c03132 from "./assets/c03132.jpg"
import c03141 from "./assets/c03141.jpg"
import c03142 from "./assets/c03142.jpg"
import c03151 from "./assets/c03151.jpg"
import c03152 from "./assets/c03152.jpg"
import c03161 from "./assets/c03161.jpg"
import c03162 from "./assets/c03162.jpg"
import c03171 from "./assets/c03171.jpg"
import c03172 from "./assets/c03172.jpg"
import c03181 from "./assets/c03181.jpg"
import c03182 from "./assets/c03182.jpg"
import c03191 from "./assets/c03191.jpg"
import c03192 from "./assets/c03192.jpg"
import c03201 from "./assets/c03201.jpg"
import c03202 from "./assets/c03202.jpg"
import c03211 from "./assets/c03211.jpg"
import c03212 from "./assets/c03212.jpg"
import c03221 from "./assets/c03221.jpg"
import c03222 from "./assets/c03222.jpg"
import c03231 from "./assets/c03231.jpg"
import c03232 from "./assets/c03232.jpg"
import c03241 from "./assets/c03241.jpg"
import c03242 from "./assets/c03242.jpg"
import c03251 from "./assets/c03251.jpg"
import c03252 from "./assets/c03252.jpg"
import c03261 from "./assets/c03261.jpg"
import c03262 from "./assets/c03262.jpg"
import c03271 from "./assets/c03271.jpg"
import c03272 from "./assets/c03272.jpg"
import c03281 from "./assets/c03281.jpg"
import re1 from "./assets/re1.jpg"
import re2 from "./assets/re2.jpg"
import re3 from "./assets/re3.jpg"

const ROOM_Z_POSITIONS = [0, 12, 24, 36, 48, 60, 72]

const CORRIDOR_MIN_Z = -6
const CORRIDOR_MAX_Z = 78
const DOOR_HALF = 1.35
const DOOR_WIDTH = DOOR_HALF * 2
const WALL_HEIGHT = 4
const DOOR_HEIGHT = 2.4
const HEADER_HEIGHT = WALL_HEIGHT - DOOR_HEIGHT
const HEADER_CENTER_Y = DOOR_HEIGHT + HEADER_HEIGHT / 2
const SIDE_WALL_WIDTH = (8 - DOOR_WIDTH) / 2
const SIDE_WALL_OFFSET = DOOR_HALF + SIDE_WALL_WIDTH / 2
const WALL_THICKNESS = 0.16
const ROOM_DOOR_GAP = 0.5
const DOOR_PASSAGE_DEPTH = ROOM_DOOR_GAP + WALL_THICKNESS
const FRAME_POST_SIZE = 0.14
const FRAME_HEADER_HEIGHT = 0.14

const END_ROOM_CENTER_Z = 82
const END_ROOM_MIN_Z = CORRIDOR_MAX_Z
const END_ROOM_MAX_Z = END_ROOM_CENTER_Z + 4
const END_DOOR_HALF = 1.35

const CAT_RADIUS = 0.32
const PLAYER_RADIUS = 0.38
const COMPANION_RADIUS = 0.34

const DIARY_UNLOCK_TARGET = 5

/* =========================
   MEDIA
   ========================= */

const MEDIA = {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  buda1,
  buda2,
  buda3,
  buda4,
  buda5,
  buda6,
  barde1,
  barde2,
  barde3,
  barde4,
  barde5,
  barde6,
  pre1,
  pre2,
  pre3,
  pre4,
  pre5,
  pre6,
  first1,
  first2,
  first3,
  first4,
  "03291": photo03291,
  "03292": photo03292,
  lastmeet1,
  lastmeet2,
  lastmeet3,
  lastmeet4,
  lastmeet5,
  lastmeet6,
  rot1,
  rot2,
  rot3,
  rot4,
  rot5,
  rot6,
  c03101,
  c03102,
  c03111,
  c03112,
  c03121,
  c03122,
  c03131,
  c03132,
  c03141,
  c03142,
  c03151,
  c03152,
  c03161,
  c03162,
  c03171,
  c03172,
  c03191,
  c03192,
  c03201,
  c03202,
  c03211,
  c03212,
  c03221,
  c03222,
  c03231,
  c03232,
  c03241,
  c03242,
  c03251,
  c03252,
  c03261,
  c03262,
  c03181,
  c03182,

  c03271,
  c03272,
  c03281,
  re1,
  re2,
  re3,
}

// Change this key to swap the image shown on the companion's front torso.
const MALE_TORSO_FRONT_MEDIA_KEY = "photo1"

/* =========================
   LEFT ROOMS: MEMORY 1 ~ 7
   ========================= */

const memory1 = {
  title: "The first meeting",
  date: "2025.01.24",
  showDate: false,
  content: `Today, I met Sasha for the first time. I was so nervous and shy that I couldn’t really look her in the face. To be honest, I wasn’t completely sure she would actually come out to meet me. When she couldn’t come to Kraków, I was really worried about whether we would ever be able to meet. But we did meet, and we spent such a happy time together. She did the ninja dance. I think I might have fallen in love.`,
}

const memory2 = {
  title: "Falling in Love With You Again",
  date: "2026.08.23~09.01",
  showDate: false,
  content: `Today, I met Sasha again.
To be honest, I was scared. I did not tell her this, but I decided to live in Europe because I wanted to see Sasha again and get to know her better. It feels like the greatest adventure of my life.
Sasha was still beautiful, and she was so kind. Every little thing she did was adorable.
During this trip, I met Sasha often and made many memories with her. We walked along the path she used to take often, climbed the hill behind the town, and spent time at the dormitory and at the bird house. It all felt like a dream.
When she showed up wearing a blue dress to meet me, I fell in love with her all over again.
By the end of the trip, the fear I had felt was gone. All I could think was, “I’m so glad I came. I’m so grateful that I got to see her again.”
I made a promise to myself that I would become a better man for her. 
P.S. I’m starting to miss the carbonara we had together. I want to eat it again.`,
}

const memory3 = {
  title: "Happiness",
  date: "2026.03.10",
  showDate: false,
  content: `We met again in Presov.
When you told me you were going to a club party, I was secretly hoping that you would ask me to come with you too. I think I really wanted to meet your friends, and more than that, I wanted to become someone important to you. Haha. So when you asked me to come with you, I was really happy. I may not have shown it much, but inside, I was honestly so excited.
There were so many people at the club, and it was chaotic, but I was so happy the whole time I was there.
The reason was simple. I was with you. Even with the loud music and all the people around us, I just kept feeling warm and excited inside. I still remember the way you smiled and danced. You looked so beautiful and so lovely. I think I kept looking at you for a long time because you were shining so brightly in that moment.
When Alina told me that you were really pretty, I agreed so much.
There were so many people there, but to me, you were the only one I could see. Everyone else felt like part of the background, and only you stood out so clearly to me. You looked so beautiful that night, and just being there with you made me feel so full and happy.
I also really loved the cat cafe we went to together.
I loved seeing you happy while looking at the cats. Your expression, the atmosphere, and the calm feeling in that place were all so comforting and lovely. It made me realize again that we did not need to do anything extraordinary to feel happy. Just spending quiet time together was already enough. Moments like that always stay in my heart for a long time.
And I was also so happy when we walked through Kosice together that day. Haha.
Nothing especially dramatic happened, but just walking side by side with you, looking at the same streets, and feeling the same air together made me so happy. Maybe those are the moments I loved the most. Because when I was with you, everywhere felt special, and everything felt meaningful.
Every moment of that day was truly joyful to me.
The loud and chaotic moments, and the quiet and peaceful ones too, I loved all of them. And whenever I think back on that day, I realize once again that what I loved most was not the place or the events themselves, but simply the fact that you were beside me in every moment.`,
}

const memory4 = {
  title: "First trip",
  date: "2026.03.10",
  showDate: false,
  content: `It was the best Halloween of my life.
But honestly, Halloween itself was not what mattered most. What made me so happy was that it was my first trip with you. That alone made the whole trip feel special to me from the beginning. Every time you smiled, every time I saw you being happy, I felt so happy too, and every single moment felt like a dream. Just being there with you already felt unreal in the best way.
I know that when you were with me, you took care of me a lot.
While we were traveling, I sometimes acted like a little kid, and thank you for comforting me so gently whenever I became clingy or childish. I still remember those moments. The way you accepted me and softly calmed me down made me feel really loved. It may have looked like something small, but to me it meant a lot. It made me feel safe being with you.
I also know that you made a lot of effort for me.
You tried so many Korean foods, and even though you are not good with spicy food, you still ate spicy things sometimes. I know that was not easy for you, so I was really thankful. Seeing you try those things for me made me feel how much you cared. Thank you, Sasha. I was truly grateful for that.
This trip to Budapest was happier than any trip I have ever been on.
The city was beautiful, of course, but what made it unforgettable was you. When the beautiful night view and you overlapped in my eyes, everything felt even more beautiful. The lights, the atmosphere, the streets, and you being there with me all came together in such a perfect way. That is why this trip stays in my heart as one of the happiest memories of my life.
And I can never forget the gift you gave me either.
It is a memory I will cherish for the rest of my life. It was not just about the gift itself, but about the heart behind it. Because it came from you, it became something even more special to me. I think I will remember that feeling for a very long time.
Also, we did not get to go to the Central Market, remember?
Next time, we have to go there together, okay? I still feel a little sad that we missed it. So I really hope that someday we can go back to Budapest together and do the things we could not do that time. I would love that.
At the end of the trip, when you said your stomach hurt, I was really worried.
And because I know your stomach has still not been feeling well these days, I have been even more concerned about you. We have not really been able to talk recently, so I do not know how you are doing now, but I truly hope you are feeling at least a little better. I really mean that. I hope your body has had some rest, and I hope you are taking care of yourself.
You were so sexy, really. Haha.
I love you, Sasha.`,
}

const memory5 = {
  title: "Again in Bardejov",
  date: "2026.03.10",
  showDate: false,
  content: `We met again in Bardejov after such a long time.
When I look back on that time, the fact that we met again still feels both surprising and deeply meaningful to me. I made mistakes with you, and our relationship had almost come to an end. So I knew better than anyone that meeting you again was not something I could take for granted. And yet, we met again, and we were able to spend that time together.
I also think it was a really good choice that the place we went to when we met again was Bardejov.
The town was quiet, and because of that, we were able to have many conversations. I think we could talk more honestly there than we could have in a loud or complicated place. Just walking with you, talking with you, and sharing the same time in that peaceful atmosphere meant a lot to me.
I wanted to give you the necklace in a more romantic way.
In my head, I had imagined something prettier and more special, but in reality, it did not turn out to be as romantic as I had hoped, and I felt a little disappointed about that. Still, you looked genuinely happy, and I was so grateful for that. It made me feel relieved and thankful that you accepted the heart behind my gift so warmly.
Even though we met again after such a long time, I still felt frustrating in some ways.
After some time passed, I thought about it a lot on my own, and now I think I understand better why I made you feel frustrated sometimes. I was so indecisive that I could not even choose something as simple as a meal menu, all because I thought I was being considerate of you. At the time, I believed that was my way of caring, but now I see that it was not always like that.
Now I understand something a little better.
The things I did for you, thinking they were for your sake, may not always have made you happy. Even if my intentions were good, my actions could still feel frustrating or tiring to you. Realizing that made me feel sorry, and it also made me reflect on myself more deeply.
Still, we met again, and we spent a really happy time together.
That alone is such a precious memory to me. Even if it was not perfect, that time was still warm and sincere. The day we met again, the quiet atmosphere of that town, and the conversations we shared will stay in my heart for a long time.
Thank you, Sasha.`,
}

const memory6 = {
  title: "Rotterdam, With You",
  date: "",
  showDate: false,
  content: `Sasha, I went to Rotterdam to see you.
Looking back, I think a part of me really wanted to have a meal with your parents and ask for their blessing for our relationship. It sounds a little funny, haha, but that was how serious I was about you.
The time I spent with you there was truly so happy.
Eating Korean food together, looking around the market, and even the way you laughed when I almost fell. So many things happened. Even those small moments have stayed with me for a long time. It feels like every moment became special simply because I was with you.
It was also my first time going to a roller-skating rink, and it was really fun.
I was not very good at skating, but I think what made it so special was that I got to experience it with you. Even being clumsy and unsteady became a happy memory because you were there.
And I do not think I will ever forget the candy kiss we shared while walking that day.
That moment is still so vivid in my memory. We were just walking down the street, but it felt like a scene from a movie. Being with you made even an ordinary street feel like part of a beautiful memory.
Walking you home also made me so happy.
It felt like we were just a normal couple, doing something ordinary together, and that made me incredibly happy. It was not because of anything grand or dramatic. Just spending time together, walking side by side, and taking you home felt so precious to me. Maybe that is why it felt even more real.
When I organized the photos this time, I realized something.
We did not actually take that many pictures in Rotterdam. We took a lot with the film camera, but there were not many photos on our phones, and that made me a little sad. Maybe it is because we were living more in the moment than trying to capture it, but still, I wish there were more photos I could look back on now.
That is why I want to travel to Rotterdam with you once again someday.
Next time, I want us to take more pictures, laugh more, and walk together for even longer. Since it is already a city filled with happy memories for me, I feel like going there with you again would create even more beautiful memories.
I love you, Sasha.`,
}

const memory7 = {
  title: "Prešov",
  date: "",
  showDate: false,
  content: `Sasha, this was the last trip I had with you.
To be honest, I wanted to go somewhere more special, like Portugal or Budapest. But because you said you wanted to feel a cozy atmosphere, we met in Prešov instead, the place that feels the most comfortable to us. It is like my sixth hometown. Looking back, I think it was such a good choice. Haha.
The time I spent with you in Prešov was truly so happy.
We really got to feel that cozy atmosphere we wanted. Of course, fancy and extraordinary destinations are nice too, but this time, more than anything, just being with you felt warm and precious. Maybe that is why it felt even more comfortable, and why I think I will remember it for a very long time.
Especially compared to when I traveled there in August, I could really feel how much our relationship had changed.
The feeling between us was clearly different from back then. It felt much more loving and sweet. While we were together, I could naturally feel that change, and it made me so happy. It made my heart feel soft, and it made me look at you even more lovingly.
I really wanted to cook for you.
Actually, I wanted to make a birthday meal for you back in the Netherlands, but somehow it felt like that happened a little late. Haha. Still, I was happy that I could finally show you that part of my heart. Sharing the food I made with you meant much more to me than I expected.
And when you wore the necklace I gave you, I felt so grateful, and you looked so adorable.
Seeing you wear something I gave you made my heart feel full. It felt like you had truly accepted my gift in a special way, and that made me feel both thankful and full of love. Those small moments stay in my memory for a very long time.
I can still clearly remember you walking while carrying that panda plush that was almost as big as you.
You looked so lovable that I did not want to send you back to the dormitory. Haha. I just wanted to keep you by my side a little longer and stay in that warm, cute moment with you. I do not know why, but when I am with you, even the most ordinary scenes become special.
And I really think it was such a good thing that we made clay art together.
If we had not been able to buy the clay and do that together, I think I would still be regretting it even now. It was not just about making something. I loved the whole process of us laughing together, focusing on it, and looking at each other’s creations. That is why it became such a precious memory for me.
The piece you gave me is still on my desk, and I look at it every single day.
Even when I am just passing by, I find myself looking at it. And every time I do, I think of you. I hope you are cherishing the one I gave you in the same way. I think that would make my heart feel a little warmer.
Honestly, I did not want to go back home.
I wanted to stay with you longer. I even wanted to keep living with you. It was not just that I was sad the trip was ending. I really hated the thought of having to be apart from you. Maybe that is why, because it was the last trip, I wanted to hold onto every moment even more and remember everything for as long as I can.
I miss you so much, Sasha.`,
}

const LEFT_MEMORIES = [
  memory1,
  memory2,
  memory3,
  memory4,
  memory5,
  memory6,
  memory7,
]

/* =========================
   RIGHT ROOMS: DIARY 1 ~ 21
   ========================= */

const diary1 = {
  title: "A Cold Day, A Warm Memory",
  date: "2026.03.10",
  content: `Today, it was cold, so I wore the jacket you once said looked good on me.
Today was the day I had my team project class. It went better than I expected. When I met my teammates, I kept thinking about what you told me — not to be nervous, and that I would be able to make good friends. They were all nice people, and I finished the school day well.
At first, I thought I should keep the words I said, live better, become a better and more admirable man, and then contact you again. But after just one day without talking to you, I missed you so much.
The things you told me keep coming to my mind as naturally as breathing — how you said you had been having stomach problems lately, and how sad you were that your nails had become weak.
Actually, I did not cry yesterday, but today I am crying a lot while writing this diary. Still, I want to keep trying my best.
I hope that one day I can stand in front of you again.`,
}

const diary2 = {
  title: "Promise",
  date: "2026.03.09",
  content: `Today, Sasha and I broke up.
I feel so sad and sorry.
She told me that I do not love her.
My heart hurts. I feel like I made a really big mistake toward her.
I keep thinking that maybe I used my poor way of expressing myself as an excuse, and ignored her pain instead of truly understanding it.
Because of me, she felt lonely and hurt.
I am so sorry.
She told me that all of this is meaningless, but from now on, I will try for 21 days so that I will no longer be someone who only makes promises with words.
She does not know this, and maybe she will never open this game.
But I told her that I could become a man.
Even though she is not here, I will keep my promise.`,
}

const diary3 = {
  title: "A Cold Day, but a Small Step Forward",
  date: "2026.03.11",
  content: `Today was cold again. In Korea, we have an expression called samhan saon, which means that when spring comes, the weather sometimes suddenly turns back into winter.
Today, I ate a proper meal. To be honest, after breaking up with you, I could not eat anything for two days. But I felt like I could not keep going like that, so today I cooked rice for the first time in a while and had a warm meal.
I was going to eat lunch at school, but there were so many people there today. I would have had to wait at least 30 minutes just to get food, so I skipped lunch and came back home and ate later instead.
Oh, and I also finished applying for the table tennis club I told you. I am a little worried that I might not get accepted because I am older than the others. But if I get an interview, I am going to show them that age is just a number, haha.
How was your day? I hope you had a happy day.
Then I will come back tomorrow with another diary entry. Bye.`,
}

const diary4 = {
  title: "A Quiet Day at Home",
  date: "2026.03.13",
  content: `Today, I stayed home all day. When I woke up, I felt like I had caught a cold. Maybe because I have not been eating well lately, my body feels weaker than usual. So today, I stayed home and slept a lot.
I put off the homework I was supposed to do until tomorrow and stayed under the blanket all day. Still, by the time I am writing this diary now, I think I feel much better.
Since I slept all day, I missed both breakfast and lunch. But because I promised myself to eat more properly, I made dinner for myself. Do you remember the soy sauce egg rice I made for you before? I made that today. It was good, haha. When I do not have much of an appetite, I think food like that is the best.
After I finish writing this diary, I am going to clean my room. From now on, I want to clean my room at least twice a week. After all, I never know when I might be able to video call you again.
To be honest, I do not really know your schedule well these days, but I remember that you used to go to dance class every Friday. I was always happy to see how excited you looked on those days.
And since you have not been feeling well lately and have been feeling down because of your nails, I hope you can go to the dance class you love and relieve some of your stress.
I will stop here for today.
Goodbye, Sasha.

It’s 10 p.m. now, and I opened my diary again because I had something more to add. Of course, I did clean my room, haha.
I’m going to meet Kim tomorrow. Actually, I had said no at first because I need to go to the library tomorrow, but Kim said he really want to see me, so I agreed.
After texting Kim, I opened KakaoTalk and realized that tomorrow is Kim’s birthday. I had forgotten. If I had kept saying no and not met him, I must feel really sorry.
Tomorrow, I’m going to drink, so I might not be able to write in my diary tomorrow night. I think I’ll probably write again on Sunday afternoon. I’m sorry.
To be honest, I opened my diary again because I wanted to tell you this as soon as the plan was made.
`,
}

const diary5 = {
  title: "A Long Day at the Library",
  date: "2026.03.12",
  content: `Hi. Today, I only had one class, so I finished school early and went to the library. I spent the whole day there watching video lectures. Since it has been a while since I last studied seriously, I feel like my progress is slow and my brain is cramping, haha.
Also, my iPad was delivered today. It was my first time really using an iPad, so I spent almost thirty minutes setting it up and playing around with different things. It made me feel like I had gone back to childhood.
Oh, and I’m going to see Kim the weekend after next. Kim gathered people together and suggested that those of us who went to Mongolia meet up. Do you remember the two girls who visited Kraków last time? Kim said he was going to invite them too, so I hesitated for a moment. But he said it had been a long time since all of us got together, so I said okay for now.
This time, I told you as soon as the plan was made. I’m trying not to lie :)
I’m doing my best to stay cheerful, but when I write in my diary at night like this, I still feel a little sad. Actually, I left some food again today. By the time I contact you after 21 days, I think I might have lost some weight... haha.
You worked hard today too — both you and me.
.`,
}

const diary6 = {
  title: "Kim’s Birthday and Thoughts of You",
  date: "2026.03.14",
  content: `Today, I met Kim because it was his birthday.
I was studying at the library, so Kim came all the way to my neighborhood to see me. I congratulated him in person. He probably thought I did not know it was his birthday, but when we met, I gave him a cake as a surprise gift.
We went to a sashimi restaurant and ate raw fish together. It was a place Kim and I had been going to since we were 21, so it felt familiar and nostalgic.
After that, we went to a traditional Korean pub. Do you remember tteokbokki? I mean the one we had in Budapest before. Anyway, we ate that along with some fried food.
After that, Kim went home. He left early because he lives far away. He does not live in Seoul, so it took him almost two hours to come all the way here just to see me.
Then I went to singingroom alone. It had been a long time since I drank, and I suddenly felt like singing. While I was singing, I kept thinking about you. So I sang love songs.
I even recorded some videos, but after sobering up and watching them again, I felt too embarrassed to post them here. If you ever come to Korea later, I will practice and sing for you properly.
Actually, it is Sunday morning now. I got home late last night, so I am writing this now.
I will do my best again today and make it a good day.
I love you, no matter when or where. Have a nice day:)`,
}

const diary7 = {
  title: "A Rainy Day and a Long One",
  date: "2026.03.16",
  content: `Today, it rained. But I did not use an umbrella, because I am half European, haha.
Actually, I just did not have one. But since it was not raining that hard, I did not feel like buying an umbrella, so I just walked around in the rain.
Today, I had a lot of classes, so I spent the whole day in class. Some of them were online, so I watched video lectures in the library. By the time I finished all my classes, it was already past 6 p.m. I came to school around 10, so I really studied all day. I was so tired.ㅠㅠ
Still, after my classes ended, I went back to the library and started studying English. I looked up English exams yesterday because I am thinking about taking one around April or May.
When I talked with you, it somehow always felt like the conversation went well. But when I actually try to listen to questions and write out my answers, I feel completely stuck, haha. It made me realize how much you cared for me and made things easier for me when we talked. Thank you, Sasha. I wish I had realized that a little sooner.
By the time I finished studying and came home, it was around 9 p.m. I am hungry because I did not eat dinner, but I think I am just going to sleep. Maybe this is a good chance to lose some weight.
How was your day, Sasha? I know this is a letter that will not get a reply, but I still wonder.
We all worked hard today.
Good night, Sasha.`,
}

const diary8 = {
  title: "An Ordinary Day, Still Full of You",
  date: "2026.03.15",
  content: `Hi, Sasha.
Today was not a very special day. I just spent the whole day at the library.
How was your day?
These days, I have been going to the library every day because I am trying to catch up on my studies. Some of my classes are taught  in English, you know? So just listening to the lectures is not enough for me to fully understand everything, haha. I thought I had studied English pretty hard, but I guess I still have a long way to go. So I think I am going to start studying English again from tomorrow.
Also, since today was Sunday, I cleaned my room. It really made me feel better to see everything neat and clean.
And do you remember my diary? I found one of your hairs inside it, haha. It was still there like a bookmark. It was kind of funny, but also a little sad.
That is all for today. I have a lot of classes tomorrow, so I am going to sleep early.
Good night, Sasha.
I hope you are not having scary dreams these days.
I will pray to the moon for you, so that you can sleep without bad dreams.`,
}

const diary9 = {
  title: "A Fresh Cut and a Quiet Day",
  date: "2026.03.17",
  content: `Today, I got a haircut, Sasha.
I kept putting it off, but I finally did it.
These days, even hair salons need reservations, so it ended up taking longer because I booked one that people around me said was really good at cutting hair.
It feels nice to have my hair cut again after such a long time, haha. I took a picture, so take a look and tell me what you think. Since I got a perm, it might look a little awkward today, but I’m sure it will look better after a few days. I’ll upload a comparison picture next week too, so look forward to it :)
Because I came home early to get my haircut, I did not really do much today. After getting my hair done, I had dinner at home and spent a lot of time just lying down.
Oh, and even though I got caught in the rain yesterday, I did not catch a cold. I’m telling you just in case you were wondering, haha.
These days, I think I’m getting used to writing in this diary like this. Maybe even after I give these diary entries to you, I will still keep writing sometimes.
Looking back on my day like this makes me feel like I should live even harder tomorrow.
I pray that all of us will have a better and more beautiful tomorrow.
I love you, Sasha.`,
}

const diary10 = {
  title: "The Green Jacket and a Small Change",
  date: "2026.03.19",
  content: `Today, Sasha, I wore that green jacket you said looked strange, haha.
That jacket is kind of a symbol of “Dinosaur.”
I had class starting at 11 today, but I woke up late. Actually, I woke up early at first, but then I thought, “I’ll just sleep a little more,” and ended up oversleeping. So I just threw on some clothes quickly, and that is how I ended up wearing the green jacket.
Luckily, I was not late for class.
Starting today, I began writing a plan. It is more like a to-do list than a real plan, but anyway, I started organizing the things I need to do during the day and decided that I would go home only after finishing them all.
Maybe this could change the way I live a little. I have been thinking that maybe my life, which has always felt a bit unplanned, could start becoming different.
When I got home, Kim texted me. He asked if I wanted to meet tomorrow. Since I do not have class on Friday, I said yes.
These days, Kim is pretty much the only person I see, so that time feels precious to me, haha. If I did not have Kim, I think I would feel very lonely.
Tomorrow, I have to go to the library in the morning and meet Kim in the afternoon, so I am going to sleep early.
Good night, Sasha..`,
}

const diary11 = {
  title: "A Warm Spring Feeling",
  date: "2026.03.18",
  content: `Today, the sunlight felt warm, so I sat on campus for a while. Somehow, I just did not want to go straight into the library right after class, haha.
There used to be a lot of cats on campus, so when I sat there like this, one of them would sometimes come up to me. But I did not see any today. That made me a little sad.
Still, while I was walking around campus for a bit, I found some flowers. I guess spring is already here. You know that strange feeling when your heart starts fluttering for no reason? It felt like I had gone back to being 20 years old and was coming to campus for the first time.
It was a day that made my heart feel warm again after a long time.
(Of course, I still ended up going to the library before coming home.)
When I got home, I practiced reading my English script. The English test I told you about is a speaking test. Of course, it is not the kind of test where you memorize a script and recite it. I have to answer the questions right away like an interview. Since I just started studying for it, I wrote down some sample answers to expected questions on Monday, and I read through those today.
The R sound still feels really difficult for me. Why do Korean tigers not growl like “RRRR” like English ones do? Haha.
Still, if I practice every day, maybe I will get a little better, right? And if not, then maybe I will just focus on answers that do not have too many r sounds in them during the interview, haha.
It is already getting late at night. I guess this is about the time you would be awake and active, Sasha.
I hope only good things happen to you today. :)`,
}

const diary12 = {
  title: "A New Phone and a concert",
  date: "2026.03.20",
  content: `Today, my new phone was delivered.
You remember how my old phone was broken, right? So this time, I got a new one. It is my first new phone since 2019, so I was really excited.
Actually, the delivery was supposed to arrive in the afternoon, and I was planning to wait until then. But yesterday, Kim asked if we could meet this afternoon, so I went to the delivery driver myself and picked up the phone early in the morning.
I was so excited :)
It made me feel like a little kid again, haha.
(So I ended up not going to the library today.)
In the afternoon, I went to the Van Gogh Art Concert with Kim. Kim said he got free tickets, so we went together. It was near Kim’s house, so the round trip took more than three hours.
At the concert, a docent talked about Van Gogh’s life and explained his paintings, while a pianist and a violinist performed classical music that matched the atmosphere of each piece.
It made me happy because it reminded me of when I went to the Van Gogh Museum in Amsterdam earlier this year.
By the time the concert ended and I started heading home, it took almost another two hours, so Kim and I just had a simple dinner and said goodbye.
When I finally got home, it was almost 11 p.m.
I am tired, so I am going to sleep early.
I hope you had a good day too, Sasha.`,
}

const diary13 = {
  title: "A Quiet Sunday at the Library",
  date: "2026.03.22",
  content: `Today is Sunday. The weather was nice, so part of me wanted to go to the Han River, but I had too much to study, so I went to the library again today.
I did not feel like cooking, so on my way to school, I bought a soup called haejangguk and ate it with rice. It is one of the foods I would like to introduce to you someday, but I do not think you would be able to eat it because it is a little spicy.
Nothing especially different happened today. I studied digital-related subjects and English. I think I may have to take one more English test, so I am studying reading as well.
Sometimes I think I should have worked harder when I was with you. These days, I keep thinking about how things might have been different if, when you pointed out my mistakes, I had not only felt embarrassed but had actually tried harder to improve, haha.
While I was studying, my head started to hurt a little, so I took a short walk around the library. While I was walking, I found a new flower. It looked a little like the flower you received as a gift before, so it made me think of you once again.
Maybe that is why I missed you especially much today.
I ended up writing about you all through this diary again.
I hope you have a good day, Sasha.`,
}

const diary14 = {
  title: "Sorting Through Old Photos",
  date: "2026.03.21",
  content: `Today, I spent some time choosing old photos for the game I am making.
Looking through those old pictures brought so many emotions to me all at once — sadness, joy, longing, happiness. I think today was the first time I truly realized that I am someone who can feel so many things so deeply.
To be honest, I am also pretty scared. I keep wondering if making this game and giving it to you might hurt you instead. What if it ruins your day again? That thought came to my mind a lot today.
And I am also afraid that once I give you this game, I will lose my last reason to contact you forever.
Still, I will keep doing my best with the time I have left... haha :)
Today, I did not feel like going to the library, so I just finished choosing the photos and stayed home to practice English speaking. ChatGPT has been helping me a lot. I still cannot pronounce the R sound very well, but I think I am slowly getting used to answering questions right away without writing a script first.
After studying, I felt too lazy to cook, so I ordered chicken. I had been cooking for myself every day lately, so ordering delivery felt so easy and nice. And it was so delicious that it made me happy, haha.
Next time you come to Korea, I will definitely make sure you try Korean chicken. There are so many really delicious kinds here. Today, I had chicken with a sweet cheese sauce on top. I am sure you would like it too.
I did not take a picture, so I do not think I can show you one. Sorry ㅜㅜ
I hope that today was also a day when you thought about me, even just a little.
I will stop here for now, goodnight Sasha.`,
}

const diary15 = {
  title: "New Hobby",
  date: "2026.03.23",
  content: `Today was the busy class day I told you about before.
So I spent the whole day at school. ㅜㅜ
It is already the third week, so I guess you can kind of imagine what my life has been like these days, haha. I keep doing the same things over and over.
But today was a little different. While I was studying in the library, I found a new hobby. It is drawing on my iPad.
I remembered how you used to draw your feelings, and it made me want to try drawing too. But once I actually started, it was harder than I thought, so for now I have been practicing by looking at your photos and trying to draw them.
If I ever get good at it, I will give one to you as a gift :)
It might take a long time, though. I guess I really do not have much talent when it comes to art, haha. If you saw what I drew today, you would probably tell me to delete it right away.
Anyway, between drawing and studying, time passed quickly, and before I knew it, it was almost 10 p.m. So I got home really late.
I also took a picture of the moon, but I do not think it came out very clearly. Still, it looked beautiful to me, maybe because it is always the moon I make my wishes to, haha.
It was a long day again today.
Good night, Sasha.`,
}

const diary16 = {
  title: "A Movie I Missed and an Ordinary Night",
  date: "2026.03.25",
  content: `Hi, Sasha.
These days in Korea, there is a movie called The Man Who Lives with the King that is really popular. I heard that more than 12 million people have already watched it in theaters. So today, I was going to go see it.
In Korea, the last Wednesday of every month is called Culture Day, and movie tickets are discounted. But I could not go. When I checked the movie times this afternoon, almost all the tickets were already sold out. And honestly, I did not want to watch the movie from the very front row. So I decided to just go another time.
It made me realize once again that I really need to book things in advance. It also made me understand again why you used to feel so frustrated with me. I’m sorry, Sasha.
So, as usual, I went to the library today. I studied a little there, but maybe because I had already been too excited about the movie, I could not really focus. So I came home early.
At home, instead of watching a movie, I just watched YouTube. And before I knew it, it was already night, haha. I feel like I barely did anything but play around today, but somehow I am still tired.
If The Man Who Lives with the King ever comes to Netflix, I think it would be nice if we could watch it together while talking on the phone.
Have a good day today Sasha!`,
}

const diary17 = {
  title: "Step by Step",
  date: "2026.03.24",
  content: `Today is the day I have my team project class. And I found out something I did not know before — I think there is a Mongolian person in this class.
I am not sure why, but he had not come to class for the past few weeks, and apparently he is starting to attend from today. He is in a different group, so I did not talk to him. That made me feel a little disappointed. I am thinking of talking to him first next week.
I am not very good at Mongolian, but I think if I keep using it little by little, my language skills might improve.
After class, I had tonkatsu for lunch at the school cafeteria. Do you know this? In Korea, there is a joke that Korean men can eat happily for life without complaining as long as they have gukbap, tonkatsu, and spicy pork stir-fry, haha.
Today I ate one of those three — tonkatsu — and since it had been a while, it tasted really good.
I will make this for you someday too.
(My mom is really good at making tonkatsu, so I will learn from her.)
You can probably guess what happened after that, right? I went to the library and studied again today. I had a lot of assignments, so I spent the whole day working on them.
But still, at the beginning of March, I could not even understand the problems. These days, though, because I have been studying every day, I was able to solve them pretty well :)
So today feels like a pretty good day.
I really like this feeling — when the effort I put in finally comes back to me, haha.
What kind of day did you have today?
If you ever get the chance, I hope you can tell me someday :)`,
}

const diary18 = {
  title: "An Ordinary Day at School",
  date: "2026.03.26",
  content: `Today, I came to school early. My class starts at 11, but since I relaxed a little too much yesterday, I went to the school library around 8:30 first.
Also, my Mobile Communications class is a little difficult, so I need to review and prepare in advance.
After class, I went back to the library again. Maybe because I came to school so early, I got really tired around 3 p.m., so I took a nap there. I wrote “a little nap,” but honestly, I slept for almost two hours, haha. I slept with my head down on the desk, but it was such a good sleep.
After I woke up, I felt a little hungry, so I ate at the school cafeteria and then went back to the library to study again.
I think I came home around 10 p.m.
Lately, my days have already been pretty uneventful, but today especially, I really did not do anything special.
I wanted to tell you something fun about my day, but I do not really have much to write.
I hope tomorrow turns into a slightly more special day.
I will keep it short today.
Good night, Sasha.`,
}

const diary19 = {
  title: "A Quiet Day at Home",
  date: "2026.03.28",
  content: `When I woke up today, it was already almost 3 p.m., haha. I guess I really pushed myself too hard yesterday.
I did not go to the library today. By the time I ate, showered, and got ready, it was already past 6 p.m. And since I have a lunch appointment tomorrow, I could not stay up too late tonight, so I studied at home instead.
I have assignments due by Monday, so I worked on them and also practiced English speaking. I cannot really practice speaking properly in the library, so I have to do that part when I am at home.
But after talking with ChatGPT for about two hours, I got a little tired of it. So I spent some more time drawing. My skills still are not improving, but I think I found a really nice hobby. I want to show you my drawings soon, haha.
I also watched a little drama at home today. Do you know Mr. Plankton? I had never seen it before, but it seemed pretty interesting, so I watched episodes 1 and 2. To be honest, I do not usually watch K-dramas very much, but sometimes they are nice, so I have been looking up the popular ones.
And today, I cleaned my room too. I think I will probably drink a little tomorrow, so I wanted to do it in advance today.
Sasha, how was your day? How have you been feeling lately? There are so many things I want to ask, but your KakaoTalk profile is locked, so I cannot reach out to you. That makes me a little sad.
I am going to sleep early tonight.
Good night.`,
}

const diary20 = {
  title: "A Long Night at the Library",
  date: "2026.03.27",
  content: `Today was a day without classes, so I slept in, haha.
At first, I woke up in the morning, but I wanted to sleep more, so I went back to sleep. When I finally got up, it was already around 1 p.m.
After waking up, I ate, took a shower, got ready, and went out, and by then it was already around 5 p.m. Usually, that is the time when people are going home, but I was going to school at that time. It felt a little strange.
Still, it was nice because there were plenty of seats in the library.
As I kept studying there, I suddenly realized it was already almost dawn. It is 2 a.m. now. For some reason, I studied especially well today, so I am only going to write a little in my diary and then go back to studying.
Bye for now.
Now it is 5 a.m.
I think the sun is going to rise soon. I just got back home a little while ago. I almost stayed up all night.
It felt like a day full of passion for the first time in a while, haha.
And since I have not eaten anything since the meal I had before going to the library, I am really hungry. So after I finish writing this diary, I am going to eat something and then go to sleep.
I know the order feels a little strange, but just for today, I want to do whatever my body tells me to do, haha.
Come to think of it, it must be around 9 p.m. for you now too.
It has been a while since we might be going to sleep at a similar time.
Good night, Sasha :)`,
}

const diary21 = {
  title: "The Night Before I Reach Out to You",
  date: "2026.03.29",
  content: `Today, I met the people I got to know during the Mongolia trip I told you about before.
I have been meeting Kim about once a week these days. Kim was the one who brought this gathering together too. Thanks to Kim, it feels like not every week is exactly the same.
We had a late lunch. They said the place was famous in Korea and that people even wait in line to eat there, but it was much spicier than I expected, so it was a little hard for me.
After that, we stopped by a cafe and had a bread that is popular these days, the kind with a lot of butter in it. It was really good. If you come to Korea, I will definitely buy it for you.
Also, the cafe we went to was run by a science YouTuber, so it was decorated with all kinds of science-related things. I thought that was really interesting. Since I loved Interstellar, I was especially happy to see a model of TARS there. There were too many people around, so I did not take a picture with it. I felt a little shy.
Then we went to a board game cafe and played a few games. It was fun. If you come to Korea, I want to do that with you too.
Later, we went to have dinner, but again we ate something spicy, so I did not eat much. I would not recommend that one, haha.
After that, I came home. My house is close, so it did not take long, but the others said it would take them at least an hour to get home. On my way back, I bought a little bit of rice cake and ate it. I think I did not eat enough for dinner.
Tomorrow, I am finally going to try contacting you.
I am very scared because I do not know what kind of answer I will get. Tonight, I am going to fall asleep praying to the moon that things will go well between us tomorrow.
Good night.
I was lying in bed trying to sleep, but I could not fall asleep, so I opened my diary again.
Maybe I am feeling this anxious because I keep thinking that I might not be able to contact you anymore after tomorrow. Even though I know this is selfish, I still keep feeling like I want to hold on to you somehow, even if it is only like this.
Tomorrow, I want to talk to you with a smile.
I love you.`,
}

const finalRoomDiary = {
  title: "The Last Letter",
  date: "2026.03.30",
  content: `After thinking about it for a long time, I finally decided to write this letter.
Only after we broke up did I begin to see more clearly how irresponsible and thoughtless my words and actions must have felt to you. Back then, I think I was too focused on my own feelings to truly see your hurt and disappointment.
You were taking our relationship seriously, but I was not able to carry that weight all the way through. Because of that, I know I ended up exhausting you and disappointing you deeply.
I also know that saying these things now may already be too late, and that a few words cannot easily heal the hurt that has already been caused. Still, there is something I really wanted to tell you: I am no longer avoiding the fact that I was wrong. I am finally acknowledging it honestly.
I do not want to be the kind of person who simply says “I’m sorry” and leaves it at that. From now on, I want to show through my attitude and actions how seriously I am trying to change, instead of just saying the right words.
I am not asking you to trust my sincerity right away. I only hope you can know that I am truly sorry for the pain I caused you, and that I am not taking lightly the fact that I disappointed you.
If someday there comes a time when you are willing to look at my heart again, I promise that by then I will be someone who is more careful, more responsible, and someone who proves things through actions rather than words.
I hope this letter does not feel like a burden to you. More than anything, I just wanted to tell you sincerely that I am truly sorry.`,
}

/* =========================
   LEFT ROOM MEDIA
   ========================= */

const LEFT_ROOM_MEDIA = [
  {
    farWall: ["photo1", "re1"],
    backWall: ["first1", "first2"],
    frontWall: ["first3", "first4"],
  },
  {
    farWall: ["photo4", "re2"],
    backWall: ["photo5", "photo6"],
    frontWall: ["photo8", "photo7"],
  },
  {
    farWall: ["pre1", "pre2"],
    backWall: ["pre3", "pre4"],
    frontWall: ["pre5", "pre6"],
  },
  {
    farWall: ["buda1", "buda2"],
    backWall: ["buda3", "buda4"],
    frontWall: ["buda5", "buda6"],
  },
  {
    farWall: ["barde1", "barde2"],
    backWall: ["barde3", "barde4"],
    frontWall: ["barde5", "barde6"],
  },
  {
    farWall: ["rot1", "rot2"],
    backWall: ["rot3", "rot4"],
    frontWall: ["rot5", "rot6"],
  },
  {
    farWall: ["lastmeet1", "lastmeet2"],
    backWall: ["lastmeet3", "lastmeet4"],
    frontWall: ["lastmeet5", "lastmeet6"],
  },
]

/* =========================
   RIGHT ROOM WALLS
   ========================= */

const RIGHT_ROOM_WALLS = [
  {
    farWall: {
      diary: diary1,
      media: [
        { type: "photo", src: "c03101" },
        { type: "photo", src: "c03102" },
      ],
    },
    backWall: {
      diary: diary2,
      media: [
        { type: "photo", src: "photo2" },
        { type: "photo", src: "photo3" },
      ],
    },
    frontWall: {
      diary: diary3,
      media: [
        { type: "photo", src: "c03111" },
        { type: "photo", src: "c03112" },
      ],
    },
  },
  {
    farWall: {
      diary: diary4,
      media: [
        { type: "photo", src: "c03131" },
        { type: "photo", src: "c03132" },
      ],
    },
    backWall: {
      diary: diary5,
      media: [
        { type: "photo", src: "c03121" },
        { type: "photo", src: "c03122" },
      ],
    },
    frontWall: {
      diary: diary6,
      media: [
        { type: "photo", src: "c03141" },
        { type: "photo", src: "c03142" },
      ],
    },
  },
  {
    farWall: {
      diary: diary7,
      media: [
        { type: "photo", src: "c03161" },
        { type: "photo", src: "c03162" },
      ],
    },
    backWall: {
      diary: diary8,
      media: [
        { type: "photo", src: "c03151" },
        { type: "photo", src: "c03152" },
      ],
    },
    frontWall: {
      diary: diary9,
      media: [
        { type: "photo", src: "c03171" },
        { type: "photo", src: "c03172" },
      ],
    },
  },
  {
    farWall: {
      diary: diary10,
      media: [
        { type: "photo", src: "c03191" },
        { type: "photo", src: "c03192" },
      ],
    },
    backWall: {
      diary: diary11,
      media: [
        { type: "photo", src: "c03181" },
        { type: "photo", src: "c03182" },
      ],
    },
    frontWall: {
      diary: diary12,
      media: [
        { type: "photo", src: "c03201" },
        { type: "photo", src: "c03202" },
      ],
    },
  },
  {
    farWall: {
      diary: diary13,
      media: [
        { type: "photo", src: "c03221" },
        { type: "photo", src: "c03222" },
      ],
    },
    backWall: {
      diary: diary14,
      media: [
        { type: "photo", src: "c03211" },
        { type: "photo", src: "c03212" },
      ],
    },
    frontWall: {
      diary: diary15,
      media: [
        { type: "photo", src: "c03231" },
        { type: "photo", src: "c03232" },
      ],
    },
  },
  {
    farWall: {
      diary: diary16,
      media: [
        { type: "photo", src: "c03251" },
        { type: "photo", src: "c03252" },
      ],
    },
    backWall: {
      diary: diary17,
      media: [
        { type: "photo", src: "c03241" },
        { type: "photo", src: "c03242" },
      ],
    },
    frontWall: {
      diary: diary18,
      media: [
        { type: "photo", src: "c03261" },
        { type: "photo", src: "c03262" },
      ],
    },
  },
  {
    farWall: {
      diary: diary19,
      media: [
        { type: "photo", src: "c03281" },
        { type: "photo", src: "re3" },
      ],
    },
    backWall: {
      diary: diary20,
      media: [
        { type: "photo", src: "c03271" },
        { type: "photo", src: "c03272" },
      ],
    },
    frontWall: {
      diary: diary21,
      media: [
        { type: "photo", src: "03291" },
        { type: "photo", src: "03292" },
      ],
    },
  },
]

function Wall({
  position,
  rotation = [0, 0, 0],
  size,
  color,
  thickness = WALL_THICKNESS,
}) {
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ color }),
    [color]
  )

  return (
    <mesh
      position={position}
      rotation={rotation}
      material={material}
      userData={{ cameraObstacle: true }}
    >
      <boxGeometry args={[size[0], size[1], thickness]} />
    </mesh>
  )
}

function lerpAngle(current, target, alpha) {
  const delta =
    ((((target - current) % (Math.PI * 2)) + Math.PI * 3) % (Math.PI * 2)) - Math.PI
  return current + delta * alpha
}

function DoorFrame({ position, openingWidth = DOOR_WIDTH, openingHeight = DOOR_HEIGHT }) {
  const insetX = position[0] < 0 ? 0.03 : -0.03
  const headerInsetY = 0.01

  return (
    <>
      <mesh
        position={[position[0] + insetX, openingHeight / 2, position[2] - DOOR_HALF]}
        userData={{ cameraObstacle: true }}
      >
        <boxGeometry args={[DOOR_PASSAGE_DEPTH, openingHeight, FRAME_POST_SIZE]} />
        <meshStandardMaterial color="#5a3d2b" />
      </mesh>
      <mesh
        position={[position[0] + insetX, openingHeight / 2, position[2] + DOOR_HALF]}
        userData={{ cameraObstacle: true }}
      >
        <boxGeometry args={[DOOR_PASSAGE_DEPTH, openingHeight, FRAME_POST_SIZE]} />
        <meshStandardMaterial color="#5a3d2b" />
      </mesh>
      <mesh
        position={[
          position[0] + insetX,
          openingHeight + FRAME_HEADER_HEIGHT / 2 - headerInsetY,
          position[2],
        ]}
        userData={{ cameraObstacle: true }}
      >
        <boxGeometry
          args={[
            DOOR_PASSAGE_DEPTH,
            FRAME_HEADER_HEIGHT,
            openingWidth + FRAME_POST_SIZE,
          ]}
        />
        <meshStandardMaterial color="#5a3d2b" />
      </mesh>
    </>
  )
}

function EndDoorFrame({ z }) {
  const insetZ = 0.03
  const headerInsetY = 0.01

  return (
    <>
      <mesh position={[-DOOR_HALF, DOOR_HEIGHT / 2, z + insetZ]} userData={{ cameraObstacle: true }}>
        <boxGeometry args={[FRAME_POST_SIZE, DOOR_HEIGHT, DOOR_PASSAGE_DEPTH]} />
        <meshStandardMaterial color="#5a3d2b" />
      </mesh>
      <mesh position={[DOOR_HALF, DOOR_HEIGHT / 2, z + insetZ]} userData={{ cameraObstacle: true }}>
        <boxGeometry args={[FRAME_POST_SIZE, DOOR_HEIGHT, DOOR_PASSAGE_DEPTH]} />
        <meshStandardMaterial color="#5a3d2b" />
      </mesh>
      <mesh
        position={[0, DOOR_HEIGHT + FRAME_HEADER_HEIGHT / 2 - headerInsetY, z + insetZ]}
        userData={{ cameraObstacle: true }}
      >
        <boxGeometry
          args={[DOOR_WIDTH + FRAME_POST_SIZE, FRAME_HEADER_HEIGHT, DOOR_PASSAGE_DEPTH]}
        />
        <meshStandardMaterial color="#5a3d2b" />
      </mesh>
    </>
  )
}

function PhotoFrame({
  position,
  rotation = [0, 0, 0],
  onOpen,
  width = 1.45,
  height = 1.0,
  image,
  texture,
}) {
  const fallbackTexture = useMemo(() => {
    if (texture || !image) return null
    const loader = new THREE.TextureLoader()
    const loadedTexture = loader.load(image)
    loadedTexture.colorSpace = THREE.SRGBColorSpace
    return loadedTexture
  }, [texture, image])

  const finalTexture = texture || fallbackTexture

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[width + 0.24, height + 0.24, 0.08]} />
        <meshStandardMaterial color="#4b2e1f" />
      </mesh>
      <mesh position={[0, 0, 0.05]} onClick={onOpen}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial map={finalTexture} />
      </mesh>
    </group>
  )
}

function VideoPanel({
  position,
  rotation = [0, 0, 0],
  onOpen,
  width = 1.45,
  height = 0.8,
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[width + 0.24, height + 0.24, 0.08]} />
        <meshStandardMaterial color="#1f1f1f" />
      </mesh>
      <mesh position={[0, 0, 0.05]} onClick={onOpen}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  )
}

function DiaryPanel({
  position,
  rotation = [0, 0, 0],
  onOpen,
  width = 1.15,
  height = 1.55,
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[width + 0.22, height + 0.22, 0.08]} />
        <meshStandardMaterial color="#7a5230" />
      </mesh>
      <mesh position={[0, 0, 0.05]} onClick={onOpen}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial color="#f5ecd9" />
      </mesh>
    </group>
  )
}

function CorridorSideSegments({ side }) {
  const x = side === "left" ? -2.5 : 2.5
  const rot = side === "left" ? [0, Math.PI / 2, 0] : [0, -Math.PI / 2, 0]
  const color = "#c9d6df"

  const gaps = ROOM_Z_POSITIONS.map((z) => [z - DOOR_HALF, z + DOOR_HALF])
  const segments = []

  let cursor = CORRIDOR_MIN_Z
  for (const [start, end] of gaps) {
    if (start > cursor) segments.push([cursor, start])
    cursor = end
  }
  if (cursor < CORRIDOR_MAX_Z) segments.push([cursor, CORRIDOR_MAX_Z])

  return (
    <>
      {segments.map(([a, b], idx) => {
        const len = b - a
        const center = (a + b) / 2
        return (
          <Wall
            key={`${side}-segment-${idx}`}
            position={[x, 2, center]}
            rotation={rot}
            size={[len, 4]}
            color={color}
          />
        )
      })}
    </>
  )
}

function RoomShell({ side, zCenter }) {
  const roomX = side === "left" ? -7 : 7
  const farWallX = side === "left" ? -11 : 11
  const farWallRotation =
    side === "left" ? [0, Math.PI / 2, 0] : [0, -Math.PI / 2, 0]

  const corridorDoorX = side === "left" ? -2.5 : 2.5
  const roomDoorX = side === "left" ? -3.0 : 3.0
  const corridorDoorRot =
    side === "left" ? [0, Math.PI / 2, 0] : [0, -Math.PI / 2, 0]
  const roomDoorRot =
    side === "left" ? [0, -Math.PI / 2, 0] : [0, Math.PI / 2, 0]
  const frameX = (corridorDoorX + roomDoorX) / 2

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[roomX, 0, zCenter]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#8b7d6b" side={THREE.DoubleSide} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[roomX, 4, zCenter]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#d9d9d9" side={THREE.DoubleSide} />
      </mesh>

      <Wall
        position={[farWallX, 2, zCenter]}
        rotation={farWallRotation}
        size={[8, 4]}
        color="#c9d6df"
      />

      <Wall position={[roomX, 2, zCenter - 4]} size={[8, 4]} color="#c9d6df" />
      <Wall
        position={[roomX, 2, zCenter + 4]}
        rotation={[0, Math.PI, 0]}
        size={[8, 4]}
        color="#c9d6df"
      />

      <Wall
        position={[roomDoorX, HEADER_CENTER_Y, zCenter]}
        rotation={roomDoorRot}
        size={[8, HEADER_HEIGHT]}
        color="#c9d6df"
      />

      <Wall
        position={[roomDoorX, DOOR_HEIGHT / 2, zCenter + SIDE_WALL_OFFSET]}
        rotation={roomDoorRot}
        size={[SIDE_WALL_WIDTH, DOOR_HEIGHT]}
        color="#c9d6df"
      />
      <Wall
        position={[roomDoorX, DOOR_HEIGHT / 2, zCenter - SIDE_WALL_OFFSET]}
        rotation={roomDoorRot}
        size={[SIDE_WALL_WIDTH, DOOR_HEIGHT]}
        color="#c9d6df"
      />

      <Wall
        position={[corridorDoorX, HEADER_CENTER_Y, zCenter]}
        rotation={corridorDoorRot}
        size={[4, HEADER_HEIGHT]}
        color="#c9d6df"
      />

      <DoorFrame position={[frameX, 0, zCenter]} />
    </>
  )
}

function EndRoomShell({ isUnlocked }) {
  if (!isUnlocked) return null

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, END_ROOM_CENTER_Z]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#8b7d6b" side={THREE.DoubleSide} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, END_ROOM_CENTER_Z]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#d9d9d9" side={THREE.DoubleSide} />
      </mesh>

      <Wall
        position={[-4, 2, END_ROOM_CENTER_Z]}
        rotation={[0, Math.PI / 2, 0]}
        size={[8, 4]}
        color="#c9d6df"
      />

      <Wall
        position={[4, 2, END_ROOM_CENTER_Z]}
        rotation={[0, -Math.PI / 2, 0]}
        size={[8, 4]}
        color="#c9d6df"
      />

      <Wall
        position={[0, 2, END_ROOM_MAX_Z]}
        rotation={[0, Math.PI, 0]}
        size={[8, 4]}
        color="#c9d6df"
      />

      <Wall
        position={[0, HEADER_CENTER_Y, END_ROOM_MIN_Z]}
        size={[8, HEADER_HEIGHT]}
        color="#c9d6df"
      />

      <Wall
        position={[-SIDE_WALL_OFFSET, DOOR_HEIGHT / 2, END_ROOM_MIN_Z]}
        size={[SIDE_WALL_WIDTH, DOOR_HEIGHT]}
        color="#c9d6df"
      />
      <Wall
        position={[SIDE_WALL_OFFSET, DOOR_HEIGHT / 2, END_ROOM_MIN_Z]}
        size={[SIDE_WALL_WIDTH, DOOR_HEIGHT]}
        color="#c9d6df"
      />

      <EndDoorFrame z={END_ROOM_MIN_Z} />
    </>
  )
}

function CorridorAndRooms({ isFinalRoomUnlocked }) {
  const corridorLength = CORRIDOR_MAX_Z - CORRIDOR_MIN_Z

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 36]}>
        <planeGeometry args={[5, corridorLength]} />
        <meshStandardMaterial color="#7c6f64" side={THREE.DoubleSide} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, 36]}>
        <planeGeometry args={[5, corridorLength]} />
        <meshStandardMaterial color="#d9d9d9" side={THREE.DoubleSide} />
      </mesh>

      <Wall position={[0, 2, CORRIDOR_MIN_Z]} size={[5, 4]} color="#c9d6df" />

      {isFinalRoomUnlocked ? (
        <>
          <Wall
            position={[0, HEADER_CENTER_Y, CORRIDOR_MAX_Z]}
            rotation={[0, Math.PI, 0]}
            size={[8, HEADER_HEIGHT]}
            color="#c9d6df"
          />
          <Wall
            position={[-SIDE_WALL_OFFSET, DOOR_HEIGHT / 2, CORRIDOR_MAX_Z]}
            rotation={[0, Math.PI, 0]}
            size={[SIDE_WALL_WIDTH, DOOR_HEIGHT]}
            color="#c9d6df"
          />
          <Wall
            position={[SIDE_WALL_OFFSET, DOOR_HEIGHT / 2, CORRIDOR_MAX_Z]}
            rotation={[0, Math.PI, 0]}
            size={[SIDE_WALL_WIDTH, DOOR_HEIGHT]}
            color="#c9d6df"
          />
        </>
      ) : (
        <Wall
          position={[0, 2, CORRIDOR_MAX_Z]}
          rotation={[0, Math.PI, 0]}
          size={[8, 4]}
          color="#b8c3cf"
        />
      )}

      <CorridorSideSegments side="left" />
      <CorridorSideSegments side="right" />

      {ROOM_Z_POSITIONS.map((z) => (
        <RoomShell key={`left-${z}`} side="left" zCenter={z} />
      ))}
      {ROOM_Z_POSITIONS.map((z) => (
        <RoomShell key={`right-${z}`} side="right" zCenter={z} />
      ))}

      <EndRoomShell isUnlocked={isFinalRoomUnlocked} />
    </>
  )
}

function LeftRoomContent({
  roomIndex,
  zCenter,
  setOpenedPhoto,
  setOpenedVideo,
  setDiaryData,
  textures,
}) {
  const farWallRotation = [0, Math.PI / 2, 0]
  const memoryData = LEFT_MEMORIES[roomIndex]
  const decor = LEFT_ROOM_MEDIA[roomIndex]

  const renderMedia = (key, position, rotation, width = 1.35, height = 0.95) => {
    const src = MEDIA[key]
    if (!src) return null

    if (key.startsWith("video")) {
      return (
        <VideoPanel
          key={`${roomIndex}-${key}-${position.join("-")}`}
          position={position}
          rotation={rotation}
          width={width}
          height={0.8}
          onOpen={() => setOpenedVideo(src, `left-room-${roomIndex + 1}-video-${key}`)}
        />
      )
    }

    return (
      <PhotoFrame
        key={`${roomIndex}-${key}-${position.join("-")}`}
        position={position}
        rotation={rotation}
        width={width}
        height={height}
        image={src}
        texture={textures?.[key]}
        onOpen={() => setOpenedPhoto(src, `left-room-${roomIndex + 1}-photo-${key}`)}
      />
    )
  }

  return (
    <>
      {renderMedia(decor.farWall[0], [-10.95, 2.45, zCenter - 1.8], farWallRotation)}
      {renderMedia(decor.farWall[1], [-10.95, 2.45, zCenter + 1.8], farWallRotation)}

      <DiaryPanel
        position={[-10.95, 1.35, zCenter]}
        rotation={farWallRotation}
        width={1.15}
        height={1.45}
        onOpen={() => setDiaryData(`left-room-${roomIndex + 1}-memory-note`, memoryData)}
      />

      {renderMedia(decor.backWall[0], [-8.8, 2.35, zCenter - 3.95], [0, 0, 0])}
      {renderMedia(decor.backWall[1], [-5.2, 2.35, zCenter - 3.95], [0, 0, 0])}

      {renderMedia(decor.frontWall[0], [-8.8, 2.35, zCenter + 3.95], [0, Math.PI, 0])}
      {renderMedia(decor.frontWall[1], [-5.2, 2.35, zCenter + 3.95], [0, Math.PI, 0])}
    </>
  )
}

function RightRoomContent({
  roomIndex,
  zCenter,
  setOpenedPhoto,
  setOpenedVideo,
  setDiaryData,
  textures,
}) {
  const roomData = RIGHT_ROOM_WALLS[roomIndex]

  const renderMedia = (item, position, rotation, width = 1.5, height = 1.05) => {
    const src = MEDIA[item.src]
    if (!src) return null

    if (item.type === "video") {
      return (
        <VideoPanel
          key={`${roomIndex}-${item.src}-${position.join("-")}`}
          position={position}
          rotation={rotation}
          width={width}
          height={0.8}
          onOpen={() => setOpenedVideo(src, `right-room-${roomIndex + 1}-video-${item.src}`)}
        />
      )
    }

    return (
      <PhotoFrame
        key={`${roomIndex}-${item.src}-${position.join("-")}`}
        position={position}
        rotation={rotation}
        width={width}
        height={height}
        image={src}
        texture={textures?.[item.src]}
        onOpen={() => setOpenedPhoto(src, `right-room-${roomIndex + 1}-photo-${item.src}`)}
      />
    )
  }

  return (
    <>
      {renderMedia(
        roomData.farWall.media[0],
        [10.95, 2.45, zCenter - 2.2],
        [0, -Math.PI / 2, 0]
      )}
      {renderMedia(
        roomData.farWall.media[1],
        [10.95, 2.45, zCenter + 2.2],
        [0, -Math.PI / 2, 0]
      )}
      <DiaryPanel
        position={[10.95, 1.4, zCenter]}
        rotation={[0, -Math.PI / 2, 0]}
        width={1.15}
        height={1.45}
        onOpen={() =>
          setDiaryData(`right-room-${roomIndex + 1}-far-diary`, roomData.farWall.diary)
        }
      />

      {renderMedia(
        roomData.backWall.media[0],
        [5.2, 2.35, zCenter - 3.95],
        [0, 0, 0]
      )}
      {renderMedia(
        roomData.backWall.media[1],
        [8.8, 2.35, zCenter - 3.95],
        [0, 0, 0]
      )}
      <DiaryPanel
        position={[7, 1.45, zCenter - 3.95]}
        rotation={[0, 0, 0]}
        width={1.15}
        height={1.45}
        onOpen={() =>
          setDiaryData(`right-room-${roomIndex + 1}-back-diary`, roomData.backWall.diary)
        }
      />

      {renderMedia(
        roomData.frontWall.media[0],
        [5.2, 2.35, zCenter + 3.95],
        [0, Math.PI, 0]
      )}
      {renderMedia(
        roomData.frontWall.media[1],
        [8.8, 2.35, zCenter + 3.95],
        [0, Math.PI, 0]
      )}
      <DiaryPanel
        position={[7, 1.45, zCenter + 3.95]}
        rotation={[0, Math.PI, 0]}
        width={1.15}
        height={1.45}
        onOpen={() =>
          setDiaryData(`right-room-${roomIndex + 1}-front-diary`, roomData.frontWall.diary)
        }
      />
    </>
  )
}

function EndRoomContent({
  setDiaryData,
  isUnlocked,
}) {
  if (!isUnlocked) return null

  return (
    <>
      <DiaryPanel
        position={[0, 1.45, END_ROOM_MAX_Z - 0.05]}
        rotation={[0, Math.PI, 0]}
        width={1.15}
        height={1.45}
        onOpen={() => setDiaryData("end-room-diary", finalRoomDiary)}
      />
    </>
  )
}

function HiddenRoomCompanion({
  isUnlocked,
  playerPosition,
  playerIsMoving,
  playerIsDashing,
  textures,
}) {
  const rootRef = useRef()
  const heartAnchorRef = useRef()
  const armRefs = useRef([])
  const legRefs = useRef([])
  const velocityRef = useRef(new THREE.Vector3())
  const phaseRef = useRef("approaching")
  const [hearts, setHearts] = useState([])
  const heartIdRef = useRef(0)

  const backTextTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 512
    canvas.height = 512
    const context = canvas.getContext("2d")

    if (!context) return null

    context.fillStyle = "#111111"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "#f0c3a5"
    context.font = "italic 72px serif"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText("I love you", canvas.width / 2, canvas.height / 2)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  }, [])

  const frontTexture = textures?.[MALE_TORSO_FRONT_MEDIA_KEY] ?? null

  const spawnHearts = (e) => {
    e?.stopPropagation?.()

    const baseId = heartIdRef.current
    const newHearts = Array.from({ length: 6 }).map((_, i) => ({
      id: baseId + i,
      offsetX: (Math.random() - 0.5) * 0.7,
      offsetY: 0.45 + Math.random() * 0.35,
      offsetZ: (Math.random() - 0.5) * 0.7,
      driftX: (Math.random() - 0.5) * 0.25,
      driftZ: (Math.random() - 0.5) * 0.25,
      speedY: 0.45 + Math.random() * 0.25,
      bornAt: performance.now(),
    }))

    heartIdRef.current += 6
    setHearts((prev) => [...prev, ...newHearts])

    setTimeout(() => {
      setHearts((prev) =>
        prev.filter((heart) => !newHearts.some((h) => h.id === heart.id))
      )
    }, 1200)
  }

  useEffect(() => {
    if (!rootRef.current) return
    rootRef.current.position.set(0, 0, END_ROOM_CENTER_Z + 1.4)
    phaseRef.current = isUnlocked ? "approaching" : "waiting"
    velocityRef.current.set(0, 0, 0)
  }, [isUnlocked])

  const getZone = (x, z) => {
    const inEndRoom =
      x >= -4 && x <= 4 && z >= END_ROOM_MIN_Z && z <= END_ROOM_MAX_Z

    if (inEndRoom) return "endRoom"

    for (const zCenter of ROOM_Z_POSITIONS) {
      const inLeftRoom =
        x >= -11 && x <= -3 && z >= zCenter - 4 && z <= zCenter + 4
      const inRightRoom =
        x >= 3 && x <= 11 && z >= zCenter - 4 && z <= zCenter + 4

      if (inLeftRoom) return "leftRoom"
      if (inRightRoom) return "rightRoom"
    }

    return "corridor"
  }

  const getNearestDoorZ = (z) => {
    let closest = ROOM_Z_POSITIONS[0]
    let minDist = Math.abs(z - closest)

    for (const doorZ of ROOM_Z_POSITIONS) {
      const dist = Math.abs(z - doorZ)
      if (dist < minDist) {
        minDist = dist
        closest = doorZ
      }
    }
    return closest
  }

  const getNearestDoorIndex = (z) => {
    let closestIndex = 0
    let minDist = Math.abs(z - ROOM_Z_POSITIONS[0])

    for (let index = 1; index < ROOM_Z_POSITIONS.length; index += 1) {
      const dist = Math.abs(z - ROOM_Z_POSITIONS[index])
      if (dist < minDist) {
        minDist = dist
        closestIndex = index
      }
    }

    return closestIndex
  }

  useFrame((state, delta) => {
    if (!isUnlocked || !rootRef.current) return

    const companion = rootRef.current
    const currentPos = companion.position.clone()
    const playerTarget = new THREE.Vector3(playerPosition.x, 0, playerPosition.z)
    const companionZone = getZone(currentPos.x, currentPos.z)
    const playerZone = getZone(playerPosition.x, playerPosition.z)
    const exitTarget = new THREE.Vector3(0, 0, CORRIDOR_MAX_Z - 1.2)
    const desiredDistance = playerIsMoving ? 1.1 : 1.75

    let desiredTarget = null

    if (phaseRef.current === "approaching") {
      desiredTarget = exitTarget
      if (currentPos.distanceTo(exitTarget) <= 0.2) {
        phaseRef.current = "following"
      }
    } else if (playerZone === "endRoom") {
      desiredTarget = playerTarget
        .clone()
        .add(new THREE.Vector3(0.9, 0, 0.85))
        .clamp(
          new THREE.Vector3(-3.1, 0, END_ROOM_MIN_Z + 0.9),
          new THREE.Vector3(3.1, 0, END_ROOM_MAX_Z - 0.9)
        )
    } else if (companionZone === "endRoom" && playerZone !== "endRoom") {
      desiredTarget = exitTarget
    } else if (companionZone !== playerZone) {
      const doorZ = getNearestDoorZ(playerPosition.z)

      if (companionZone === "leftRoom" && playerZone === "corridor") {
        desiredTarget = new THREE.Vector3(-2.2, 0, doorZ)
      } else if (companionZone === "rightRoom" && playerZone === "corridor") {
        desiredTarget = new THREE.Vector3(2.2, 0, doorZ)
      } else if (companionZone === "corridor" && playerZone === "leftRoom") {
        desiredTarget = new THREE.Vector3(-3.7, 0, doorZ)
      } else if (companionZone === "corridor" && playerZone === "rightRoom") {
        desiredTarget = new THREE.Vector3(3.7, 0, doorZ)
      } else if (companionZone === "leftRoom" && playerZone === "rightRoom") {
        desiredTarget = new THREE.Vector3(-2.2, 0, doorZ)
      } else if (companionZone === "rightRoom" && playerZone === "leftRoom") {
        desiredTarget = new THREE.Vector3(2.2, 0, doorZ)
      } else {
        desiredTarget = playerTarget.clone()
      }
    } else {
      const towardPlayer = playerTarget.clone().sub(currentPos)
      if (towardPlayer.lengthSq() > 0.0001) {
        desiredTarget = playerTarget
          .clone()
          .addScaledVector(towardPlayer.normalize(), -desiredDistance)
      } else {
        desiredTarget = currentPos.clone()
      }
    }

    const towardTarget = desiredTarget.clone().sub(currentPos)
    const distanceToTarget = towardTarget.length()
    const shouldWalk = distanceToTarget > 0.12

    if (shouldWalk) {
      towardTarget.normalize()
      velocityRef.current.lerp(
        towardTarget.multiplyScalar(
          phaseRef.current === "approaching"
            ? 1.6
            : playerIsDashing
              ? 6
              : playerIsMoving
                ? 3
                : 0.72
        ),
        Math.min(1, delta * 4)
      )
      const previousX = companion.position.x
      const previousZ = companion.position.z
      const nextX = companion.position.x + velocityRef.current.x * delta
      const nextZ = companion.position.z + velocityRef.current.z * delta

      if (isCompanionWalkable(nextX, nextZ, previousX, previousZ, true)) {
        companion.position.x = nextX
        companion.position.z = nextZ
      } else {
        const canMoveX = isCompanionWalkable(nextX, previousZ, previousX, previousZ, true)
        const canMoveZ = isCompanionWalkable(previousX, nextZ, previousX, previousZ, true)

        if (canMoveX) companion.position.x = nextX
        if (canMoveZ) companion.position.z = nextZ
        if (!canMoveX && !canMoveZ) velocityRef.current.multiplyScalar(0.5)
      }
    } else {
      velocityRef.current.multiplyScalar(0.8)
    }

    companion.position.x = THREE.MathUtils.clamp(companion.position.x, -10.2, 10.2)
    companion.position.z = THREE.MathUtils.clamp(companion.position.z, CORRIDOR_MIN_Z + 0.9, END_ROOM_MAX_Z - 0.8)

    const lookDirection = playerZone !== "endRoom" || companionZone !== "endRoom"
      ? new THREE.Vector3(
          playerPosition.x - companion.position.x,
          0,
          playerPosition.z - companion.position.z
        )
      : shouldWalk
      ? velocityRef.current.clone()
      : new THREE.Vector3(
          playerPosition.x - companion.position.x,
          0,
          playerPosition.z - companion.position.z
        )

    if (lookDirection.lengthSq() > 0.0001) {
      lookDirection.normalize()
      const targetYaw = Math.atan2(lookDirection.x, lookDirection.z) + Math.PI
      companion.rotation.y = lerpAngle(
        companion.rotation.y,
        targetYaw,
        Math.min(1, delta * 8)
      )
    }

    const swing = Math.sin(state.clock.elapsedTime * (shouldWalk ? 8.4 : 2.5)) *
      (shouldWalk ? 0.8 : 0.05)

    armRefs.current.forEach((arm, index) => {
      if (!arm) return
      const dir = index === 0 ? 1 : -1
      arm.rotation.x = THREE.MathUtils.lerp(arm.rotation.x, swing * dir, delta * 10)
    })

    legRefs.current.forEach((leg, index) => {
      if (!leg) return
      const dir = index === 0 ? -1 : 1
      leg.rotation.x = THREE.MathUtils.lerp(leg.rotation.x, swing * dir, delta * 10)
    })
  })

  if (!isUnlocked) return null

  return (
    <group ref={rootRef}>
      <group ref={heartAnchorRef} position={[0, 2.15, 0]} />

      <mesh position={[0, 0.95, 0]} onClick={spawnHearts}>
        <boxGeometry args={[0.9, 1.9, 0.9]} />
        <meshStandardMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <mesh position={[0, 1.52, 0]} onClick={spawnHearts}>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
        <meshStandardMaterial color="#f0d1bb" roughness={0.92} />
      </mesh>

      <mesh position={[0, 1.64, 0]} onClick={spawnHearts}>
        <boxGeometry args={[0.5, 0.22, 0.46]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.56, 0.03]}>
        <boxGeometry args={[0.48, 0.18, 0.44]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.47, 0.18]}>
        <boxGeometry args={[0.46, 0.22, 0.14]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.9} />
      </mesh>
      <mesh position={[0.09, 1.48, -0.2]} rotation={[0.04, 0.26, -0.12]}>
        <boxGeometry args={[0.24, 0.14, 0.1]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.88} />
      </mesh>
      <mesh position={[-0.09, 1.48, -0.2]} rotation={[0.04, -0.26, 0.12]}>
        <boxGeometry args={[0.24, 0.14, 0.1]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.88} />
      </mesh>

      <group position={[0, 0.95, 0]}>
        <mesh position={[0, 0.25, 0]}>
          <boxGeometry args={[0.46, 0.66, 0.24]} />
          <meshStandardMaterial color="#111111" roughness={0.92} />
        </mesh>

        <mesh position={[0, 0.25, -0.121]}>
          <planeGeometry args={[0.34, 0.5]} />
          <meshStandardMaterial
            color="#ffffff"
            map={frontTexture}
            transparent={Boolean(frontTexture)}
          />
        </mesh>

        <mesh position={[0, 0.25, 0.121]}>
          <planeGeometry args={[0.34, 0.5]} />
          <meshStandardMaterial map={backTextTexture} />
        </mesh>
      </group>

      {[-1, 1].map((side, index) => (
        <group
          key={`hidden-room-arm-${side}`}
          ref={(node) => {
            armRefs.current[index] = node
          }}
          position={[0.31 * side, 1.16, 0]}
        >
          <mesh position={[0, -0.28, 0]}>
            <boxGeometry args={[0.14, 0.56, 0.14]} />
            <meshStandardMaterial color="#111111" roughness={0.92} />
          </mesh>
          <mesh position={[0, -0.58, 0]}>
            <boxGeometry args={[0.14, 0.08, 0.16]} />
            <meshStandardMaterial color="#f0d1bb" roughness={0.95} />
          </mesh>
        </group>
      ))}

      {[-1, 1].map((side, index) => (
        <group
          key={`hidden-room-leg-${side}`}
          ref={(node) => {
            legRefs.current[index] = node
          }}
          position={[0.11 * side, 0.54, 0]}
        >
          <mesh position={[0, -0.28, 0]}>
            <boxGeometry args={[0.18, 0.62, 0.18]} />
            <meshStandardMaterial color="#7b5a3e" roughness={0.95} />
          </mesh>
          <mesh position={[0, -0.6, 0.05]}>
            <boxGeometry args={[0.2, 0.08, 0.28]} />
            <meshStandardMaterial color="#2a2a2a" roughness={0.92} />
          </mesh>
        </group>
      ))}

      {hearts.map((heart) => (
        <FloatingHeart key={heart.id} heart={heart} anchorRef={heartAnchorRef} />
      ))}
    </group>
  )
}

/* =========================
   CAT WALKABLE CHECK
   ========================= */

function isCatWalkable(nextX, nextZ, prevX, prevZ, isFinalRoomUnlocked) {
  if (nextX < -10.3 + CAT_RADIUS || nextX > 10.3 - CAT_RADIUS) return false
  if (nextZ < CORRIDOR_MIN_Z + 0.8 + CAT_RADIUS) return false
  if (
    nextZ >
    (isFinalRoomUnlocked ? END_ROOM_MAX_Z - 0.8 - CAT_RADIUS : CORRIDOR_MAX_Z - 0.8 - CAT_RADIUS)
  ) {
    return false
  }

  const isSideDoorZ = ROOM_Z_POSITIONS.some(
    (zCenter) => Math.abs(nextZ - zCenter) <= DOOR_HALF - CAT_RADIUS * 0.15
  )

  const inCorridor =
    nextX >= -2.5 + CAT_RADIUS &&
    nextX <= 2.5 - CAT_RADIUS &&
    nextZ >= CORRIDOR_MIN_Z + CAT_RADIUS &&
    nextZ <= CORRIDOR_MAX_Z - CAT_RADIUS

  const inLeftRoom = ROOM_Z_POSITIONS.some(
    (zCenter) =>
      nextX >= -10.85 + CAT_RADIUS &&
      nextX <= -3 - CAT_RADIUS &&
      nextZ >= zCenter - 3.85 + CAT_RADIUS &&
      nextZ <= zCenter + 3.85 - CAT_RADIUS
  )

  const inRightRoom = ROOM_Z_POSITIONS.some(
    (zCenter) =>
      nextX >= 3 + CAT_RADIUS &&
      nextX <= 10.85 - CAT_RADIUS &&
      nextZ >= zCenter - 3.85 + CAT_RADIUS &&
      nextZ <= zCenter + 3.85 - CAT_RADIUS
  )

  const inLeftDoorway =
    nextX >= -3 - CAT_RADIUS &&
    nextX <= -2.5 + CAT_RADIUS &&
    isSideDoorZ

  const inRightDoorway =
    nextX >= 2.5 - CAT_RADIUS &&
    nextX <= 3 + CAT_RADIUS &&
    isSideDoorZ

  const inEndDoorway =
    isFinalRoomUnlocked &&
    nextZ >= CORRIDOR_MAX_Z - CAT_RADIUS &&
    nextZ <= END_ROOM_MIN_Z + 0.9 + CAT_RADIUS &&
    Math.abs(nextX) <= END_DOOR_HALF - CAT_RADIUS

  const inEndRoom =
    isFinalRoomUnlocked &&
    nextX >= -3.85 + CAT_RADIUS &&
    nextX <= 3.85 - CAT_RADIUS &&
    nextZ >= END_ROOM_MIN_Z + CAT_RADIUS &&
    nextZ <= END_ROOM_MAX_Z - 0.15 - CAT_RADIUS

  const isInsideValidArea =
    inCorridor ||
    inLeftRoom ||
    inRightRoom ||
    inLeftDoorway ||
    inRightDoorway ||
    inEndDoorway ||
    inEndRoom

  if (!isInsideValidArea) return false

  const crossedIntoLeftSide =
    (prevX > -2.5 && nextX < -2.5) || (prevX < -3 && nextX > -3)

  const crossedIntoRightSide =
    (prevX < 2.5 && nextX > 2.5) || (prevX > 3 && nextX < 3)

  if (crossedIntoLeftSide && !isSideDoorZ) return false
  if (crossedIntoRightSide && !isSideDoorZ) return false

  const crossedEndBoundary =
    isFinalRoomUnlocked &&
    ((prevZ < CORRIDOR_MAX_Z && nextZ > CORRIDOR_MAX_Z) ||
      (prevZ > END_ROOM_MIN_Z && nextZ < END_ROOM_MIN_Z))

  if (crossedEndBoundary && Math.abs(nextX) > END_DOOR_HALF - CAT_RADIUS) {
    return false
  }

  return true
}

function isPlayerWalkable(nextX, nextZ, prevX, prevZ, isFinalRoomUnlocked) {
  if (nextX < -10.3 + PLAYER_RADIUS || nextX > 10.3 - PLAYER_RADIUS) return false
  if (nextZ < CORRIDOR_MIN_Z + 0.8 + PLAYER_RADIUS) return false
  if (
    nextZ >
    (isFinalRoomUnlocked
      ? END_ROOM_MAX_Z - 0.8 - PLAYER_RADIUS
      : CORRIDOR_MAX_Z - 0.8 - PLAYER_RADIUS)
  ) {
    return false
  }

  const isSideDoorZ = ROOM_Z_POSITIONS.some(
    (zCenter) => Math.abs(nextZ - zCenter) <= DOOR_HALF - PLAYER_RADIUS * 0.15
  )

  const inCorridor =
    nextX >= -2.5 + PLAYER_RADIUS &&
    nextX <= 2.5 - PLAYER_RADIUS &&
    nextZ >= CORRIDOR_MIN_Z + PLAYER_RADIUS &&
    nextZ <= CORRIDOR_MAX_Z - PLAYER_RADIUS

  const inLeftRoom = ROOM_Z_POSITIONS.some(
    (zCenter) =>
      nextX >= -10.85 + PLAYER_RADIUS &&
      nextX <= -3 - PLAYER_RADIUS &&
      nextZ >= zCenter - 3.85 + PLAYER_RADIUS &&
      nextZ <= zCenter + 3.85 - PLAYER_RADIUS
  )

  const inRightRoom = ROOM_Z_POSITIONS.some(
    (zCenter) =>
      nextX >= 3 + PLAYER_RADIUS &&
      nextX <= 10.85 - PLAYER_RADIUS &&
      nextZ >= zCenter - 3.85 + PLAYER_RADIUS &&
      nextZ <= zCenter + 3.85 - PLAYER_RADIUS
  )

  const inLeftDoorway =
    nextX >= -3 - PLAYER_RADIUS &&
    nextX <= -2.5 + PLAYER_RADIUS &&
    isSideDoorZ

  const inRightDoorway =
    nextX >= 2.5 - PLAYER_RADIUS &&
    nextX <= 3 + PLAYER_RADIUS &&
    isSideDoorZ

  const inEndDoorway =
    isFinalRoomUnlocked &&
    nextZ >= CORRIDOR_MAX_Z - PLAYER_RADIUS &&
    nextZ <= END_ROOM_MIN_Z + 0.9 + PLAYER_RADIUS &&
    Math.abs(nextX) <= END_DOOR_HALF - PLAYER_RADIUS

  const inEndRoom =
    isFinalRoomUnlocked &&
    nextX >= -3.85 + PLAYER_RADIUS &&
    nextX <= 3.85 - PLAYER_RADIUS &&
    nextZ >= END_ROOM_MIN_Z + PLAYER_RADIUS &&
    nextZ <= END_ROOM_MAX_Z - 0.15 - PLAYER_RADIUS

  const isInsideValidArea =
    inCorridor ||
    inLeftRoom ||
    inRightRoom ||
    inLeftDoorway ||
    inRightDoorway ||
    inEndDoorway ||
    inEndRoom

  if (!isInsideValidArea) return false

  const crossedIntoLeftSide =
    (prevX > -2.5 && nextX < -2.5) || (prevX < -3 && nextX > -3)

  const crossedIntoRightSide =
    (prevX < 2.5 && nextX > 2.5) || (prevX > 3 && nextX < 3)

  if (crossedIntoLeftSide && !isSideDoorZ) return false
  if (crossedIntoRightSide && !isSideDoorZ) return false

  const crossedEndBoundary =
    isFinalRoomUnlocked &&
    ((prevZ < CORRIDOR_MAX_Z && nextZ > CORRIDOR_MAX_Z) ||
      (prevZ > END_ROOM_MIN_Z && nextZ < END_ROOM_MIN_Z))

  if (crossedEndBoundary && Math.abs(nextX) > END_DOOR_HALF - PLAYER_RADIUS) {
    return false
  }

  return true
}

function isCompanionWalkable(nextX, nextZ, prevX, prevZ, isFinalRoomUnlocked) {
  if (nextX < -10.3 + COMPANION_RADIUS || nextX > 10.3 - COMPANION_RADIUS) return false
  if (nextZ < CORRIDOR_MIN_Z + 0.8 + COMPANION_RADIUS) return false
  if (
    nextZ >
    (isFinalRoomUnlocked
      ? END_ROOM_MAX_Z - 0.8 - COMPANION_RADIUS
      : CORRIDOR_MAX_Z - 0.8 - COMPANION_RADIUS)
  ) {
    return false
  }

  const isSideDoorZ = ROOM_Z_POSITIONS.some(
    (zCenter) => Math.abs(nextZ - zCenter) <= DOOR_HALF - COMPANION_RADIUS * 0.15
  )

  const inCorridor =
    nextX >= -2.5 + COMPANION_RADIUS &&
    nextX <= 2.5 - COMPANION_RADIUS &&
    nextZ >= CORRIDOR_MIN_Z + COMPANION_RADIUS &&
    nextZ <= CORRIDOR_MAX_Z - COMPANION_RADIUS

  const inLeftRoom = ROOM_Z_POSITIONS.some(
    (zCenter) =>
      nextX >= -10.85 + COMPANION_RADIUS &&
      nextX <= -3 - COMPANION_RADIUS &&
      nextZ >= zCenter - 3.85 + COMPANION_RADIUS &&
      nextZ <= zCenter + 3.85 - COMPANION_RADIUS
  )

  const inRightRoom = ROOM_Z_POSITIONS.some(
    (zCenter) =>
      nextX >= 3 + COMPANION_RADIUS &&
      nextX <= 10.85 - COMPANION_RADIUS &&
      nextZ >= zCenter - 3.85 + COMPANION_RADIUS &&
      nextZ <= zCenter + 3.85 - COMPANION_RADIUS
  )

  const inLeftDoorway =
    nextX >= -3 - COMPANION_RADIUS &&
    nextX <= -2.5 + COMPANION_RADIUS &&
    isSideDoorZ

  const inRightDoorway =
    nextX >= 2.5 - COMPANION_RADIUS &&
    nextX <= 3 + COMPANION_RADIUS &&
    isSideDoorZ

  const inEndDoorway =
    isFinalRoomUnlocked &&
    nextZ >= CORRIDOR_MAX_Z - COMPANION_RADIUS &&
    nextZ <= END_ROOM_MIN_Z + 0.9 + COMPANION_RADIUS &&
    Math.abs(nextX) <= END_DOOR_HALF - COMPANION_RADIUS

  const inEndRoom =
    isFinalRoomUnlocked &&
    nextX >= -3.85 + COMPANION_RADIUS &&
    nextX <= 3.85 - COMPANION_RADIUS &&
    nextZ >= END_ROOM_MIN_Z + COMPANION_RADIUS &&
    nextZ <= END_ROOM_MAX_Z - 0.15 - COMPANION_RADIUS

  const isInsideValidArea =
    inCorridor ||
    inLeftRoom ||
    inRightRoom ||
    inLeftDoorway ||
    inRightDoorway ||
    inEndDoorway ||
    inEndRoom

  if (!isInsideValidArea) return false

  const crossedIntoLeftSide =
    (prevX > -2.5 && nextX < -2.5) || (prevX < -3 && nextX > -3)

  const crossedIntoRightSide =
    (prevX < 2.5 && nextX > 2.5) || (prevX > 3 && nextX < 3)

  if (crossedIntoLeftSide && !isSideDoorZ) return false
  if (crossedIntoRightSide && !isSideDoorZ) return false

  const crossedEndBoundary =
    isFinalRoomUnlocked &&
    ((prevZ < CORRIDOR_MAX_Z && nextZ > CORRIDOR_MAX_Z) ||
      (prevZ > END_ROOM_MIN_Z && nextZ < END_ROOM_MIN_Z))

  if (crossedEndBoundary && Math.abs(nextX) > END_DOOR_HALF - COMPANION_RADIUS) {
    return false
  }

  return true
}

function CatFollower({ targetPosition, isDashing, isFinalRoomUnlocked }) {
  const catRef = useRef()
  const tailRef = useRef()
  const frontLegRefs = useRef([])
  const backLegRefs = useRef([])
  const velocityRef = useRef(new THREE.Vector3())
  const [hearts, setHearts] = useState([])
  const heartIdRef = useRef(0)

  const spawnHearts = (e) => {
    e?.stopPropagation?.()

    const baseId = heartIdRef.current
    const newHearts = Array.from({ length: 6 }).map((_, i) => ({
      id: baseId + i,
      offsetX: (Math.random() - 0.5) * 0.7,
      offsetY: 0.45 + Math.random() * 0.35,
      offsetZ: (Math.random() - 0.5) * 0.7,
      driftX: (Math.random() - 0.5) * 0.25,
      driftZ: (Math.random() - 0.5) * 0.25,
      speedY: 0.45 + Math.random() * 0.25,
      bornAt: performance.now(),
    }))

    heartIdRef.current += 6
    setHearts((prev) => [...prev, ...newHearts])

    setTimeout(() => {
      setHearts((prev) =>
        prev.filter((heart) => !newHearts.some((h) => h.id === heart.id))
      )
    }, 1200)
  }

  const getZone = (x, z) => {
    const inEndRoom =
      isFinalRoomUnlocked &&
      x >= -4 && x <= 4 && z >= END_ROOM_MIN_Z && z <= END_ROOM_MAX_Z

    if (inEndRoom) return "endRoom"

    for (const zCenter of ROOM_Z_POSITIONS) {
      const inLeftRoom =
        x >= -11 && x <= -3 && z >= zCenter - 4 && z <= zCenter + 4

      const inRightRoom =
        x >= 3 && x <= 11 && z >= zCenter - 4 && z <= zCenter + 4

      if (inLeftRoom) return "leftRoom"
      if (inRightRoom) return "rightRoom"
    }

    return "corridor"
  }

  const getNearestDoorZ = (z) => {
    let closest = ROOM_Z_POSITIONS[0]
    let minDist = Math.abs(z - closest)

    for (const doorZ of ROOM_Z_POSITIONS) {
      const dist = Math.abs(z - doorZ)
      if (dist < minDist) {
        minDist = dist
        closest = doorZ
      }
    }
    return closest
  }

  useFrame((state, delta) => {
    if (!catRef.current || !targetPosition) return

    const cat = catRef.current
    const catPos = cat.position.clone()

    const catZone = getZone(catPos.x, catPos.z)
    const playerZone = getZone(targetPosition.x, targetPosition.z)

    let desiredTarget = null

    const followTarget = new THREE.Vector3(
      targetPosition.x + 0.7,
      0.22,
      targetPosition.z + 1.0
    )

    if (playerZone === "endRoom") {
      if (catZone !== "endRoom") {
        desiredTarget = new THREE.Vector3(0, 0.22, CORRIDOR_MAX_Z + 1.2)
      } else {
        desiredTarget = new THREE.Vector3(
          THREE.MathUtils.clamp(targetPosition.x + 0.8, -3.2, 3.2),
          0.22,
          THREE.MathUtils.clamp(
            targetPosition.z + 0.8,
            END_ROOM_MIN_Z + 0.8,
            END_ROOM_MAX_Z - 0.8
          )
        )
      }
    } else if (catZone === "endRoom" && playerZone !== "endRoom") {
      desiredTarget = new THREE.Vector3(0, 0.22, CORRIDOR_MAX_Z - 1.2)
    } else if (catZone !== playerZone) {
      const doorZ = getNearestDoorZ(targetPosition.z)

      if (catZone === "leftRoom" && playerZone === "corridor") {
        desiredTarget = new THREE.Vector3(-2.2, 0.22, doorZ)
      } else if (catZone === "rightRoom" && playerZone === "corridor") {
        desiredTarget = new THREE.Vector3(2.2, 0.22, doorZ)
      } else if (catZone === "corridor" && playerZone === "leftRoom") {
        desiredTarget = new THREE.Vector3(-3.8, 0.22, doorZ)
      } else if (catZone === "corridor" && playerZone === "rightRoom") {
        desiredTarget = new THREE.Vector3(3.8, 0.22, doorZ)
      } else if (catZone === "leftRoom" && playerZone === "rightRoom") {
        desiredTarget = new THREE.Vector3(-2.2, 0.22, doorZ)
      } else if (catZone === "rightRoom" && playerZone === "leftRoom") {
        desiredTarget = new THREE.Vector3(2.2, 0.22, doorZ)
      } else {
        desiredTarget = followTarget
      }
    } else {
      desiredTarget = followTarget
    }

    const toDesired = desiredTarget.clone().sub(catPos)
    const moveDistance = toDesired.length()

    if (moveDistance > 0.02) {
      const moveDir = toDesired.clone().normalize()
      const baseSpeed = moveDistance > 4 ? 4.8 : moveDistance > 2 ? 3.4 : 2.1
      const speed = isDashing ? baseSpeed * 1.2 : baseSpeed

      velocityRef.current.lerp(
        moveDir.multiplyScalar(speed),
        Math.min(1, delta * 4)
      )

      const previousX = cat.position.x
      const previousZ = cat.position.z

      const nextX = cat.position.x + velocityRef.current.x * delta
      const nextZ = cat.position.z + velocityRef.current.z * delta

      if (isCatWalkable(nextX, nextZ, previousX, previousZ, isFinalRoomUnlocked)) {
        cat.position.x = nextX
        cat.position.z = nextZ
      } else {
        const canMoveX = isCatWalkable(
          nextX,
          previousZ,
          previousX,
          previousZ,
          isFinalRoomUnlocked
        )
        const canMoveZ = isCatWalkable(
          previousX,
          nextZ,
          previousX,
          previousZ,
          isFinalRoomUnlocked
        )

        if (canMoveX) cat.position.x = nextX
        if (canMoveZ) cat.position.z = nextZ

        if (!canMoveX && !canMoveZ) {
          velocityRef.current.multiplyScalar(0.55)
        }
      }

      cat.position.x = THREE.MathUtils.clamp(cat.position.x, -10.3, 10.3)
      cat.position.z = THREE.MathUtils.clamp(
        cat.position.z,
        CORRIDOR_MIN_Z + 0.8,
        isFinalRoomUnlocked ? END_ROOM_MAX_Z - 0.8 : CORRIDOR_MAX_Z - 0.8
      )
    } else {
      velocityRef.current.multiplyScalar(0.82)
    }

    cat.position.y = 0.22 + Math.sin(state.clock.elapsedTime * 4) * 0.02

    const speedFlat = Math.hypot(velocityRef.current.x, velocityRef.current.z)

    let lookX = targetPosition.x
    let lookZ = targetPosition.z

    if (speedFlat > 0.08) {
      lookX = cat.position.x + velocityRef.current.x
      lookZ = cat.position.z + velocityRef.current.z
    }

    const dx = lookX - cat.position.x
    const dz = lookZ - cat.position.z
    const targetYaw = Math.atan2(dx, dz) + Math.PI
    cat.rotation.y = lerpAngle(cat.rotation.y, targetYaw, Math.min(1, delta * 6))

    const walkSwing = Math.sin(state.clock.elapsedTime * Math.min(8, 2.5 + speedFlat * 2.4))
    frontLegRefs.current.forEach((leg, index) => {
      if (!leg) return
      leg.rotation.x = walkSwing * 0.35 * (index === 0 ? 1 : -1)
    })
    backLegRefs.current.forEach((leg, index) => {
      if (!leg) return
      leg.rotation.x = walkSwing * 0.28 * (index === 0 ? -1 : 1)
    })

    if (tailRef.current) {
      tailRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 5) * 0.14 + 0.95
      tailRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 4) * 0.08
    }
  })

  return (
    <>
      <group ref={catRef} position={[0.7, 0.22, 3.2]} scale={[1.18, 1.18, 1.18]}>
        <mesh position={[0, 0.18, 0.1]} scale={[0.92, 0.7, 1.45]} onClick={spawnHearts} castShadow>
          <capsuleGeometry args={[0.22, 0.42, 8, 18]} />
          <meshStandardMaterial color="#6fa8ff" roughness={0.92} />
        </mesh>

        <mesh position={[0, 0.17, 0.24]} scale={[0.78, 0.64, 0.84]} castShadow>
          <sphereGeometry args={[0.19, 24, 24]} />
          <meshStandardMaterial color="#5f96f2" roughness={0.94} />
        </mesh>

        <mesh position={[0, 0.11, 0.04]} scale={[0.7, 0.56, 1]} castShadow>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color="#dce9ff" roughness={0.95} />
        </mesh>

        <mesh position={[0, 0.34, -0.3]} scale={[0.98, 0.92, 1.02]} onClick={spawnHearts} castShadow>
          <sphereGeometry args={[0.2, 28, 28]} />
          <meshStandardMaterial color="#6fa8ff" roughness={0.9} />
        </mesh>

        <mesh position={[0, 0.3, -0.41]} scale={[0.92, 0.72, 0.78]} castShadow>
          <sphereGeometry args={[0.09, 18, 18]} />
          <meshStandardMaterial color="#f3efe8" roughness={0.96} />
        </mesh>

        <mesh position={[-0.1, 0.5, -0.24]} rotation={[0.12, 0.08, 0.18]} castShadow>
          <coneGeometry args={[0.07, 0.18, 4]} />
          <meshStandardMaterial color="#9ea6b3" roughness={0.92} />
        </mesh>
        <mesh position={[0.1, 0.5, -0.24]} rotation={[0.12, -0.08, -0.18]} castShadow>
          <coneGeometry args={[0.07, 0.18, 4]} />
          <meshStandardMaterial color="#9ea6b3" roughness={0.92} />
        </mesh>

        <mesh position={[-0.1, 0.495, -0.255]} rotation={[0.12, 0.08, 0.18]} castShadow>
          <coneGeometry args={[0.038, 0.09, 4]} />
          <meshStandardMaterial color="#f4c3ca" roughness={0.95} />
        </mesh>
        <mesh position={[0.1, 0.495, -0.255]} rotation={[0.12, -0.08, -0.18]} castShadow>
          <coneGeometry args={[0.038, 0.09, 4]} />
          <meshStandardMaterial color="#f4c3ca" roughness={0.95} />
        </mesh>

        <mesh position={[-0.065, 0.36, -0.455]} scale={[0.55, 1, 0.4]} castShadow>
          <sphereGeometry args={[0.03, 14, 14]} />
          <meshStandardMaterial color="#1f241f" roughness={0.3} />
        </mesh>
        <mesh position={[0.065, 0.36, -0.455]} scale={[0.55, 1, 0.4]} castShadow>
          <sphereGeometry args={[0.03, 14, 14]} />
          <meshStandardMaterial color="#1f241f" roughness={0.3} />
        </mesh>

        <mesh position={[-0.057, 0.372, -0.468]}>
          <sphereGeometry args={[0.006, 8, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.073, 0.372, -0.468]}>
          <sphereGeometry args={[0.006, 8, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        <mesh position={[0, 0.315, -0.49]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.022, 0.05, 3]} />
          <meshStandardMaterial color="#e59aa3" />
        </mesh>

        {[-1, 1].map((side) => (
          <group key={`whiskers-${side}`} position={[0.03 * side, 0.295, -0.455]}>
            <mesh rotation={[0, 0, 0.16 * side]}>
              <boxGeometry args={[0.18, 0.004, 0.004]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh rotation={[0, 0, -0.04 * side]}>
              <boxGeometry args={[0.19, 0.004, 0.004]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh rotation={[0, 0, -0.22 * side]}>
              <boxGeometry args={[0.16, 0.004, 0.004]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
          </group>
        ))}

        {[
          { x: -0.12, z: -0.03, type: "front" },
          { x: 0.12, z: -0.03, type: "front" },
          { x: -0.13, z: 0.22, type: "back" },
          { x: 0.13, z: 0.22, type: "back" },
        ].map((leg, index) => (
          <group
            key={`leg-${index}`}
            ref={(node) => {
              if (leg.type === "front") {
                frontLegRefs.current[index % 2] = node
              } else {
                backLegRefs.current[index % 2] = node
              }
            }}
            position={[leg.x, 0.1, leg.z]}
          >
            <mesh position={[0, -0.11, 0]} castShadow>
              <capsuleGeometry args={[0.033, 0.22, 6, 12]} />
              <meshStandardMaterial color="#5c8fe6" roughness={0.94} />
            </mesh>
            <mesh position={[0, -0.27, 0.02]} scale={[1.2, 0.7, 1.3]} castShadow>
              <sphereGeometry args={[0.042, 12, 12]} />
              <meshStandardMaterial color="#ece7e1" roughness={0.95} />
            </mesh>
          </group>
        ))}

        <group ref={tailRef} position={[0, 0.28, 0.45]}>
          <mesh position={[0, 0.22, 0.02]} rotation={[1.02, 0, 0]} castShadow>
            <capsuleGeometry args={[0.03, 0.42, 6, 12]} />
            <meshStandardMaterial color="#5c8fe6" roughness={0.9} />
          </mesh>
        </group>
      </group>

      {hearts.map((heart) => (
        <FloatingHeart key={heart.id} heart={heart} catRef={catRef} />
      ))}
    </>
  )
}

function FloatingHeart({ heart, catRef, anchorRef }) {
  const ref = useRef()

  useFrame(() => {
    const baseRef = anchorRef ?? catRef
    if (!ref.current || !baseRef?.current) return

    const elapsed = (performance.now() - heart.bornAt) / 1000
    const life = Math.min(elapsed / 1.2, 1)
    const base = baseRef.current.position

    ref.current.position.set(
      base.x + heart.offsetX + heart.driftX * elapsed,
      base.y + heart.offsetY + heart.speedY * elapsed,
      base.z + heart.offsetZ + heart.driftZ * elapsed
    )

    const scale = 0.12 * (1 - life * 0.35)
    ref.current.scale.set(scale, scale, scale)
    ref.current.rotation.z = Math.sin(elapsed * 6) * 0.2
    ref.current.rotation.y += 0.03
  })

  return (
    <group ref={ref}>
      <mesh position={[-0.35, 0.2, 0]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial color="#ff6fa8" />
      </mesh>

      <mesh position={[0.35, 0.2, 0]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial color="#ff6fa8" />
      </mesh>

      <mesh position={[0, -0.28, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.9, 0.9, 0.28]} />
        <meshStandardMaterial color="#ff6fa8" />
      </mesh>
    </group>
  )
}

function SceneReady({ onReady }) {
  const calledRef = useRef(false)

  useFrame(() => {
    if (calledRef.current) return
    calledRef.current = true

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        onReady?.()
      })
    })
  })

  return null
}

function ThirdPersonAvatar({ position, facing, isMoving, isDashing }) {
  const rootRef = useRef()
  const torsoRef = useRef()
  const armRefs = useRef([])
  const legRefs = useRef([])

  useFrame((state, delta) => {
    if (!rootRef.current) return

    const bobSpeed = isMoving ? (isDashing ? 12 : 8) : 2
    const bob = Math.sin(state.clock.elapsedTime * bobSpeed) * (isMoving ? 0.04 : 0.01)
    const swing = Math.sin(state.clock.elapsedTime * bobSpeed) * (isMoving ? 0.95 : 0.06)

    rootRef.current.position.set(position.x, 0, position.z)
    rootRef.current.rotation.y = THREE.MathUtils.lerp(
      rootRef.current.rotation.y,
      facing,
      delta * 10
    )

    if (torsoRef.current) {
      torsoRef.current.position.y = THREE.MathUtils.lerp(
        torsoRef.current.position.y,
        1.02 + bob,
        delta * 10
      )
      torsoRef.current.rotation.z = THREE.MathUtils.lerp(
        torsoRef.current.rotation.z,
        Math.sin(state.clock.elapsedTime * bobSpeed * 0.5) * (isMoving ? 0.04 : 0.01),
        delta * 8
      )
    }

    armRefs.current.forEach((arm, index) => {
      if (!arm) return
      const dir = index === 0 ? 1 : -1
      arm.rotation.x = THREE.MathUtils.lerp(arm.rotation.x, swing * dir, delta * 10)
    })

    legRefs.current.forEach((leg, index) => {
      if (!leg) return
      const dir = index === 0 ? -1 : 1
      leg.rotation.x = THREE.MathUtils.lerp(leg.rotation.x, swing * dir, delta * 10)
    })
  })

  return (
    <group ref={rootRef}>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[0.44, 0.44, 0.44]} />
        <meshStandardMaterial color="#f3d9c9" roughness={0.92} />
      </mesh>

      <mesh position={[0, 1.64, 0]}>
        <boxGeometry args={[0.56, 0.24, 0.56]} />
        <meshStandardMaterial color="#f3d56f" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.5, 0.03]}>
        <boxGeometry args={[0.56, 0.18, 0.52]} />
        <meshStandardMaterial color="#f2cf6b" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.44, 0.18]}>
        <boxGeometry args={[0.52, 0.44, 0.18]} />
        <meshStandardMaterial color="#f2cf6b" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.02, 0.2]}>
        <boxGeometry args={[0.46, 0.82, 0.14]} />
        <meshStandardMaterial color="#ebc45c" roughness={0.88} />
      </mesh>

      <group ref={torsoRef} position={[0, 0.92, 0]}>
        <mesh>
          <boxGeometry args={[0.42, 0.46, 0.2]} />
          <meshStandardMaterial color="#87c8ff" roughness={0.9} />
        </mesh>
        <mesh position={[0, -0.42, 0]}>
          <coneGeometry args={[0.52, 0.9, 4]} />
          <meshStandardMaterial color="#76b9f7" roughness={0.88} />
        </mesh>
        <mesh position={[0, -0.18, -0.11]}>
          <boxGeometry args={[0.24, 0.12, 0.04]} />
          <meshStandardMaterial color="#dff0ff" roughness={0.96} />
        </mesh>
      </group>

      {[-1, 1].map((side, index) => (
        <group
          key={`avatar-arm-${side}`}
          ref={(node) => {
            armRefs.current[index] = node
          }}
          position={[0.31 * side, 1.22, 0]}
        >
          <mesh position={[0, -0.28, 0]}>
            <boxGeometry args={[0.16, 0.72, 0.16]} />
            <meshStandardMaterial color="#f3d9c9" roughness={0.92} />
          </mesh>
          <mesh position={[0, -0.72, 0.03]}>
            <boxGeometry args={[0.16, 0.06, 0.18]} />
            <meshStandardMaterial color="#f3d9c9" roughness={0.95} />
          </mesh>
        </group>
      ))}

      {[-1, 1].map((side, index) => (
        <group
          key={`avatar-leg-${side}`}
          ref={(node) => {
            legRefs.current[index] = node
          }}
          position={[0.08 * side, 0.56, 0]}
        >
          <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[0.12, 0.72, 0.12]} />
            <meshStandardMaterial color="#f3d9c9" roughness={0.93} />
          </mesh>
          <mesh position={[0, -0.76, 0.05]}>
            <boxGeometry args={[0.14, 0.05, 0.18]} />
            <meshStandardMaterial color="#fff8f0" roughness={0.95} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function Player({
  onMove,
  canMove,
  onDashChange,
  onMovementChange,
  onFacingChange,
  isFinalRoomUnlocked,
}) {
  const { camera, gl, scene } = useThree()
  const playerPosRef = useRef(new THREE.Vector3(0, 0, 2))
  const raycasterRef = useRef(new THREE.Raycaster())
  const cameraObstaclesRef = useRef([])

  const keys = useRef({
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
    ShiftLeft: false,
    ShiftRight: false,
  })

  const isDragging = useRef(false)
  const yaw = useRef(0)
  const pitch = useRef(0)

  useEffect(() => {
    camera.rotation.order = "YXZ"
    camera.position.set(0, 2.0, 3.8)

    yaw.current = Math.PI
    pitch.current = -0.22

    const canvas = gl.domElement

    const onKeyDown = (e) => {
      if (e.code in keys.current) keys.current[e.code] = true
    }

    const onKeyUp = (e) => {
      if (e.code in keys.current) keys.current[e.code] = false
    }

    const onMouseDown = () => {
      isDragging.current = true
    }

    const onMouseUp = () => {
      isDragging.current = false
    }

    const onMouseLeave = () => {
      isDragging.current = false
    }

    const onMouseMove = (e) => {
      if (!isDragging.current) return

      const sensitivity = 0.006
      yaw.current -= e.movementX * sensitivity
      pitch.current -= e.movementY * sensitivity

      const maxPitch = 0.35
      const minPitch = -0.8
      if (pitch.current > maxPitch) pitch.current = maxPitch
      if (pitch.current < minPitch) pitch.current = minPitch
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
    canvas.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("mouseleave", onMouseLeave)
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
      canvas.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mouseup", onMouseUp)
      canvas.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [camera, gl])

  useEffect(() => {
    const obstacles = []
    scene.traverse((object) => {
      if (object.userData?.cameraObstacle) obstacles.push(object)
    })
    cameraObstaclesRef.current = obstacles
  }, [scene, isFinalRoomUnlocked])

  useFrame((_, delta) => {
    const walkSpeed = 3
    const dashSpeed = 6
    const isDashingNow = keys.current.ShiftLeft || keys.current.ShiftRight
    const speed = isDashingNow ? dashSpeed : walkSpeed

    if (onDashChange) onDashChange(isDashingNow)

    const targetFov = isDashingNow ? 82 : 72
    camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, delta * 6)
    camera.updateProjectionMatrix()

    const previousX = playerPosRef.current.x
    const previousZ = playerPosRef.current.z

    const forward = new THREE.Vector3(
      -Math.sin(yaw.current),
      0,
      -Math.cos(yaw.current)
    ).normalize()

    const right = new THREE.Vector3()
    right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize()

    let nextX = previousX
    let nextZ = previousZ

    if (canMove) {
      if (keys.current.KeyW) {
        nextX += forward.x * speed * delta
        nextZ += forward.z * speed * delta
      }
      if (keys.current.KeyS) {
        nextX -= forward.x * speed * delta
        nextZ -= forward.z * speed * delta
      }
      if (keys.current.KeyA) {
        nextX -= right.x * speed * delta
        nextZ -= right.z * speed * delta
      }
      if (keys.current.KeyD) {
        nextX += right.x * speed * delta
        nextZ += right.z * speed * delta
      }
    }

    if (isPlayerWalkable(nextX, nextZ, previousX, previousZ, isFinalRoomUnlocked)) {
      playerPosRef.current.x = nextX
      playerPosRef.current.z = nextZ
    } else {
      const canMoveX = isPlayerWalkable(
        nextX,
        previousZ,
        previousX,
        previousZ,
        isFinalRoomUnlocked
      )
      const canMoveZ = isPlayerWalkable(
        previousX,
        nextZ,
        previousX,
        previousZ,
        isFinalRoomUnlocked
      )

      playerPosRef.current.x = canMoveX ? nextX : previousX
      playerPosRef.current.z = canMoveZ ? nextZ : previousZ
    }

    const lookTarget = new THREE.Vector3(
      playerPosRef.current.x,
      1.2,
      playerPosRef.current.z
    )
    const cameraOffset = new THREE.Vector3(0, 1.0, isDashingNow ? 2.6 : 3.0)
    cameraOffset.applyAxisAngle(new THREE.Vector3(1, 0, 0), pitch.current)
    cameraOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw.current)

    const desiredCameraPos = lookTarget.clone().add(cameraOffset)
    const toCamera = desiredCameraPos.clone().sub(lookTarget)
    const cameraDistance = toCamera.length()
    let resolvedCameraPos = desiredCameraPos

    if (cameraDistance > 0.001 && cameraObstaclesRef.current.length > 0) {
      const direction = toCamera.clone().normalize()
      raycasterRef.current.set(lookTarget, direction)
      raycasterRef.current.near = 0.05
      raycasterRef.current.far = cameraDistance

      const hits = raycasterRef.current.intersectObjects(cameraObstaclesRef.current, false)
      if (hits.length > 0) {
        const safeDistance = Math.max(0.75, hits[0].distance - 0.18)
        resolvedCameraPos = lookTarget.clone().addScaledVector(direction, safeDistance)
      }
    }

    camera.position.lerp(resolvedCameraPos, Math.min(1, delta * 10))
    camera.lookAt(lookTarget)

    if (onMovementChange) {
      onMovementChange(
        Math.hypot(
          playerPosRef.current.x - previousX,
          playerPosRef.current.z - previousZ
        ) > 0.0001
      )
    }

    if (onFacingChange) onFacingChange(yaw.current)

    if (onMove) {
      onMove({
        x: playerPosRef.current.x,
        y: 1.6,
        z: playerPosRef.current.z,
      })
    }
  })

  return null
}

function Crosshair() {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "28px",
        fontWeight: "bold",
        zIndex: 9999,
        pointerEvents: "none",
        userSelect: "none",
        textShadow: "0 0 4px black",
      }}
    >
      +
    </div>
  )
}

function Guide({ isCollapsed, onToggle, isFinalRoomUnlocked }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        left: 20,
        padding: "10px 14px",
        background: "rgba(0,0,0,0.55)",
        color: "white",
        borderRadius: "10px",
        fontSize: "14px",
        lineHeight: 1.5,
        zIndex: 9999,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          border: "none",
          background: "transparent",
          color: "white",
          fontWeight: 700,
          cursor: "pointer",
          padding: 0,
          marginBottom: isCollapsed ? 0 : 8,
        }}
      >
        {isCollapsed ? "Show controls" : "Hide controls"}
      </button>
      {!isCollapsed && (
        <>
          <br />
          Drag mouse to look around
          <br />
          WASD to move
          <br />
          Shift to dash
          <br />
          Click a diary panel to read it
          <br />
          Click photos and videos to view them larger
          <br />
          Pet the {isFinalRoomUnlocked ? "cat and man" : "cat"} with your mouse
        </>
      )}
    </div>
  )
}

function LoadingScreen({ progress }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        zIndex: 20000,
        gap: "16px",
      }}
    >
      <div style={{ fontSize: "28px", fontWeight: "bold" }}>Loading memories...</div>

      <div
        style={{
          width: "320px",
          height: "12px",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#ffffff",
            transition: "width 0.2s ease",
          }}
        />
      </div>

      <div style={{ fontSize: "15px", opacity: 0.8 }}>{progress}%</div>
    </div>
  )
}

function IntroOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.45)",
        zIndex: 15000,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "clamp(24px, 3vw, 42px)",
          fontWeight: 500,
          letterSpacing: "0.04em",
          textAlign: "center",
          textShadow: "0 2px 12px rgba(0,0,0,0.45)",
          padding: "0 24px",
          animation: "introFade 2.2s ease forwards",
        }}
      >
        For the memories I could not forget.
      </div>

      <style>
        {`
          @keyframes introFade {
            0% {
              opacity: 0;
              transform: translateY(8px);
            }
            18% {
              opacity: 1;
              transform: translateY(0);
            }
            78% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(-8px);
            }
          }
        `}
      </style>
    </div>
  )
}

function PhotoModal({ onClose, image }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
      }}
    >
      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "16px",
          maxWidth: "80vw",
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <img
          src={image}
          alt="Memory"
          style={{
            maxWidth: "70vw",
            maxHeight: "65vh",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
        <button
          onClick={onClose}
          style={{
            padding: "10px 14px",
            border: "none",
            borderRadius: "10px",
            background: "#ffffff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

function DiaryModal({ onClose, title, date, content, showDate = true }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
      }}
    >
      <div
        style={{
          background: "#f5ecd9",
          color: "#2b2b2b",
          padding: "24px",
          borderRadius: "16px",
          width: "min(700px, 85vw)",
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "28px" }}>{title}</h2>
          {showDate && date ? (
            <p style={{ margin: "8px 0 0 0", opacity: 0.7 }}>{date}</p>
          ) : null}
        </div>

        <div
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: 1.8,
            fontSize: "17px",
          }}
        >
          {content}
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "10px 14px",
            border: "none",
            borderRadius: "10px",
            background: "#222",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

function VideoModal({ onClose, video }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
      }}
    >
      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "16px",
          width: "min(900px, 85vw)",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <video
          src={video}
          controls
          style={{
            width: "100%",
            maxHeight: "70vh",
            borderRadius: "8px",
            background: "black",
          }}
        />
        <button
          onClick={onClose}
          style={{
            padding: "10px 14px",
            border: "none",
            borderRadius: "10px",
            background: "#ffffff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

function getQuestCopy(readDiaryCount, isFinalRoomUnlocked) {
  if (isFinalRoomUnlocked) {
    return {
      title: "Mission Complete",
      body: "The hidden room at the end of the corridor is now open.",
    }
  }

  return {
    title: "Active Mission",
    body: `Read ${DIARY_UNLOCK_TARGET} diaries to unlock the hidden room. Progress: ${readDiaryCount}/${DIARY_UNLOCK_TARGET}.`,
  }
}

function GameHud({ quest, isDashing, readDiaryCount, isFinalRoomUnlocked }) {
  const diaryProgress = Math.min(
    100,
    Math.round((readDiaryCount / DIARY_UNLOCK_TARGET) * 100)
  )

  return (
    <div className="hud-layer">
      <section className="hud-panel hud-panel-quest">
        <div className="hud-row">
          <span className="hud-badge">LIVE</span>
          <span className="hud-status">{isDashing ? "Status: Dashing" : "Status: Exploring"}</span>
        </div>
        <div className="hud-quest-title">{quest.title}</div>
        <div className="hud-quest-body">{quest.body}</div>
        <div className="hud-progress-meta">
          <span>
            Diaries read {readDiaryCount}/{DIARY_UNLOCK_TARGET}
          </span>
          <span>{isFinalRoomUnlocked ? "Hidden room unlocked" : "Hidden room locked"}</span>
        </div>
        <div className="hud-progress-bar hud-progress-bar-secondary">
          <div className="hud-progress-label">Mission progress</div>
          <div
            className="hud-progress-fill hud-progress-fill-secondary"
            style={{ width: `${diaryProgress}%` }}
          />
        </div>
      </section>
    </div>
  )
}

function MissionBanner({ isFinalRoomUnlocked }) {
  return (
    <div className="mission-banner">
      <div className="mission-banner-badge">
        {isFinalRoomUnlocked ? "MISSION SUCCESS" : "MISSION"}
      </div>
      <div className="mission-banner-title">
        {isFinalRoomUnlocked
          ? "Hidden Room Unlocked"
          : `Read ${DIARY_UNLOCK_TARGET} Diaries`}
      </div>
      <div className="mission-banner-body">
        {isFinalRoomUnlocked
          ? "The wall at the end of the corridor is gone. Walk forward to enter the final room."
          : "Open diary panels in the right rooms. After five unique diaries, the hidden room will open."}
      </div>
    </div>
  )
}

export default function App() {
  const [openedPhoto, setOpenedPhoto] = useState(null)
  const [openedVideo, setOpenedVideo] = useState(null)
  const [diaryData, setDiaryData] = useState(null)
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 1.6, z: 2 })
  const [playerFacing, setPlayerFacing] = useState(Math.PI)
  const [isDashing, setIsDashing] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const [readDiaryEntries, setReadDiaryEntries] = useState([])
  const [showUnlockBanner, setShowUnlockBanner] = useState(false)
  const [isGuideCollapsed, setIsGuideCollapsed] = useState(false)

  const [textures, setTextures] = useState({})
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [sceneReady, setSceneReady] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [canMove, setCanMove] = useState(false)
  const isFinalRoomUnlocked = readDiaryEntries.length >= DIARY_UNLOCK_TARGET

  const quest = getQuestCopy(readDiaryEntries.length, isFinalRoomUnlocked)

  const handleOpenPhoto = (image, entryKey) => {
    setOpenedPhoto(image)
  }

  const handleOpenVideo = (video, entryKey) => {
    setOpenedVideo(video)
  }

  const handleOpenDiary = (entryKey, diary) => {
    setReadDiaryEntries((prev) =>
      prev.includes(entryKey) ? prev : [...prev, entryKey]
    )
    setDiaryData(diary)
  }

  useEffect(() => {
    let isMounted = true

    const photoEntries = Object.entries(MEDIA).filter(([key]) =>
      key.startsWith("photo") ||
      key.startsWith("lastmeet") ||
      key.startsWith("buda") ||
      key.startsWith("barde") ||
      key.startsWith("pre") ||
      key.startsWith("first") ||
      key === "03291" ||
      key === "03292"
    )

    if (photoEntries.length === 0) {
      setLoadingProgress(100)
      setTextures({})
      setIsLoading(false)
      return
    }

    const loadedTextures = {}
    const manager = new THREE.LoadingManager()

    manager.onProgress = (_, itemsLoaded, itemsTotal) => {
      if (!isMounted) return
      const progress = Math.round((itemsLoaded / itemsTotal) * 100)
      setLoadingProgress(progress)
    }

    manager.onLoad = () => {
      if (!isMounted) return
      setTextures({ ...loadedTextures })
      setLoadingProgress(100)
      setIsLoading(false)
    }

    const loader = new THREE.TextureLoader(manager)

    photoEntries.forEach(([key, src]) => {
      loadedTextures[key] = loader.load(src, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
      })
    })

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (!isLoading && sceneReady) {
      setShowIntro(true)
      setCanMove(false)

      const timer = setTimeout(() => {
        setShowIntro(false)
        setCanMove(true)
      }, 2200)

      return () => clearTimeout(timer)
    }
  }, [isLoading, sceneReady])

  useEffect(() => {
    if (!isFinalRoomUnlocked) return

    setShowUnlockBanner(true)
    const timer = setTimeout(() => {
      setShowUnlockBanner(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [isFinalRoomUnlocked])

  return (
    <>
      {(!sceneReady || isLoading) && (
        <LoadingScreen progress={loadingProgress} />
      )}

      {!isLoading && sceneReady && showIntro && <IntroOverlay />}
      {!isLoading && sceneReady && !showIntro && (
        <Guide
          isCollapsed={isGuideCollapsed}
          onToggle={() => setIsGuideCollapsed((prev) => !prev)}
          isFinalRoomUnlocked={isFinalRoomUnlocked}
        />
      )}
      {!isLoading && sceneReady && !showIntro && <Crosshair />}
      {!isLoading && sceneReady && !showIntro && (
        <>
          <GameHud
            quest={quest}
            isDashing={isDashing}
            readDiaryCount={readDiaryEntries.length}
            isFinalRoomUnlocked={isFinalRoomUnlocked}
          />
          {showUnlockBanner && <MissionBanner isFinalRoomUnlocked />}
        </>
      )}

      {openedPhoto && (
        <PhotoModal image={openedPhoto} onClose={() => setOpenedPhoto(null)} />
      )}

      {openedVideo && (
        <VideoModal video={openedVideo} onClose={() => setOpenedVideo(null)} />
      )}

      {diaryData && (
        <DiaryModal
          onClose={() => setDiaryData(null)}
          title={diaryData.title}
          date={diaryData.date}
          content={diaryData.content}
          showDate={diaryData.showDate}
        />
      )}

      <Canvas
        camera={{ position: [0, 1.6, 2], fov: 75 }}
        style={{ width: "100vw", height: "100vh", background: "#202025" }}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} />

        <Suspense fallback={null}>
          <CorridorAndRooms isFinalRoomUnlocked={isFinalRoomUnlocked} />

          {ROOM_Z_POSITIONS.map((z, i) => (
            <LeftRoomContent
              key={`left-content-${z}`}
              roomIndex={i}
              zCenter={z}
              setOpenedPhoto={handleOpenPhoto}
              setOpenedVideo={handleOpenVideo}
              setDiaryData={handleOpenDiary}
              textures={textures}
            />
          ))}

          {ROOM_Z_POSITIONS.map((z, i) => (
            <RightRoomContent
              key={`right-content-${z}`}
              roomIndex={i}
              zCenter={z}
              setOpenedPhoto={handleOpenPhoto}
              setOpenedVideo={handleOpenVideo}
              setDiaryData={handleOpenDiary}
              textures={textures}
            />
          ))}

          <EndRoomContent
            setOpenedPhoto={handleOpenPhoto}
            setOpenedVideo={handleOpenVideo}
            setDiaryData={handleOpenDiary}
            textures={textures}
            isUnlocked={isFinalRoomUnlocked}
          />
          <HiddenRoomCompanion
            isUnlocked={isFinalRoomUnlocked}
            playerPosition={playerPosition}
            playerIsMoving={isMoving}
            playerIsDashing={isDashing}
            textures={textures}
          />

          <CatFollower
            targetPosition={playerPosition}
            isDashing={isDashing}
            isFinalRoomUnlocked={isFinalRoomUnlocked}
          />
          <ThirdPersonAvatar
            position={playerPosition}
            facing={playerFacing}
            isMoving={isMoving}
            isDashing={isDashing}
          />
          <Player
            onMove={setPlayerPosition}
            canMove={canMove}
            onDashChange={setIsDashing}
            onMovementChange={setIsMoving}
            onFacingChange={setPlayerFacing}
            isFinalRoomUnlocked={isFinalRoomUnlocked}
          />
          <SceneReady onReady={() => setSceneReady(true)} />
        </Suspense>
      </Canvas>
    </>
  )
}
