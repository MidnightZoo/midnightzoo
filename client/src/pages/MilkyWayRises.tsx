/* ============================================================
   Article — The Milky Way Rises
   Editorial long-form piece on the spring Milky Way chase out
   of Ironwood Forest National Monument, AZ.
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  MWR_HERO,
  MWR_PRIMITIVE_ROAD,
  MWR_SASCO_CROSSING,
  MWR_IRONWOOD_SCOUT,
  MWR_RIG_AT_NIGHT,
} from "@/lib/assets";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const bodyStyle: React.CSSProperties = {
  color: "oklch(0.78 0.008 240)",
  fontFamily: "'Figtree', system-ui, sans-serif",
  fontSize: "1.05rem",
  lineHeight: "1.85",
};

function Term({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className="cursor-help transition-colors duration-200"
          style={{
            color: "oklch(0.82 0.10 75)",
            borderBottom: "1px dotted oklch(0.72 0.12 75 / 0.6)",
          }}
        >
          {label}
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs"
        style={{
          background: "oklch(0.13 0.03 240)",
          color: "oklch(0.88 0.005 240)",
          border: "1px solid oklch(0.72 0.12 75 / 0.4)",
          fontFamily: "'Figtree', system-ui, sans-serif",
          fontSize: "0.8rem",
          lineHeight: "1.6",
        }}
      >
        {body}
      </TooltipContent>
    </Tooltip>
  );
}

function FigureBlock({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <RevealSection>
      <figure className="my-12">
        <div
          className="overflow-hidden"
          style={{ border: "1px solid oklch(0.72 0.12 75 / 0.25)" }}
        >
          <img src={src} alt={alt} className="w-full h-auto object-cover" />
        </div>
        <figcaption
          className="nav-label mt-3 text-center"
          style={{
            color: "oklch(0.55 0.01 240)",
            fontSize: "0.65rem",
          }}
        >
          {caption}
        </figcaption>
      </figure>
    </RevealSection>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <RevealSection>
      <blockquote className="my-14 text-center">
        <hr
          className="gold-rule mx-auto mb-6"
          style={{ width: "60px" }}
        />
        <p
          className="text-2xl sm:text-3xl italic"
          style={{
            fontFamily: "'Gilda Display', Georgia, serif",
            color: "oklch(0.92 0.005 240)",
            lineHeight: "1.45",
            letterSpacing: "0.005em",
          }}
        >
          "{children}"
        </p>
        <hr
          className="gold-rule mx-auto mt-6"
          style={{ width: "60px" }}
        />
      </blockquote>
    </RevealSection>
  );
}

function SectionBreak() {
  return (
    <div className="flex items-center justify-center gap-4 my-16">
      <hr className="gold-rule" style={{ width: "40px" }} />
      <span
        style={{
          color: "oklch(0.72 0.12 75 / 0.7)",
          fontFamily: "'Gilda Display', Georgia, serif",
          fontSize: "1.2rem",
          letterSpacing: "0.4em",
        }}
      >
        ✦
      </span>
      <hr className="gold-rule" style={{ width: "40px" }} />
    </div>
  );
}

export default function MilkyWayRises() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.025 240)" }}>
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative h-[80vh] min-h-[520px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${MWR_HERO})`,
            backgroundPosition: "center 20%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.07 0.01 240) 0%, oklch(0.07 0.01 240 / 0.55) 40%, transparent 75%)",
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 w-full">
          <p className="nav-label mb-3" style={{ color: "oklch(0.72 0.12 75)" }}>
            Field Notes · Spring 2026
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-5"
            style={{
              fontFamily: "'Gilda Display', Georgia, serif",
              color: "oklch(0.97 0.005 240)",
              textShadow: "0 2px 20px oklch(0 0 0 / 0.5)",
            }}
          >
            The Milky Way Rises
          </h1>
          <p
            className="text-lg sm:text-xl italic max-w-2xl mb-6"
            style={{
              color: "oklch(0.85 0.005 240)",
              fontFamily: "'Gilda Display', Georgia, serif",
              textShadow: "0 1px 8px oklch(0 0 0 / 0.6)",
            }}
          >
            Escape reality with me in this recount of my spring Milky Way chase,
            and the dangers and learning experiences that come with shooting in
            the desert.
          </p>
          <div
            className="flex flex-wrap items-center gap-x-3 gap-y-1 nav-label"
            style={{
              color: "oklch(0.82 0.005 240)",
              textShadow: "0 1px 6px oklch(0 0 0 / 0.7)",
              fontSize: "0.7rem",
            }}
          >
            <span>
              <span style={{ color: "oklch(0.72 0.12 75)" }}>Author</span>
              <span className="mx-2" style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}>·</span>
              Chuck Korenic
            </span>
            <span
              style={{
                color: "oklch(0.72 0.12 75 / 0.7)",
                fontFamily: "'Gilda Display', Georgia, serif",
                fontSize: "0.85rem",
                letterSpacing: "0",
              }}
            >
              ✦
            </span>
            <span>
              <span style={{ color: "oklch(0.72 0.12 75)" }}>Published</span>
              <span className="mx-2" style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}>·</span>
              May 25, 2026
            </span>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-20">
        <RevealSection>
          <p style={bodyStyle}>
            Spring in Arizona is a great time to capture the Milky Way. The
            core rises straight up in the early morning hours, and that
            vertical orientation is perfect for balancing the night sky
            against the landscape it's wrapped around. Every spring I have a
            work trip out to Chandler, AZ, and the post-conference activities
            tend to involve hiking, swimming, golf, pickleball, or some form
            of debauchery <em>(in the vanilla, responsible-adult sense:
            mostly just drinking and talking business)</em>. This year it
            included a Jeep, some light off-roading, and of course,
            astrophotography.
          </p>

          <p style={bodyStyle} className="mt-6">
            When I landed in Phoenix, I started my journey by heading south
            toward the home of our subject: Ironwood Forest National
            Monument. You could argue the Milky Way is the real subject here,
            especially given the title of this article, but a spring Milky
            Way shoot is a different animal than shooting something like the
            Andromeda Galaxy. This time I'm working in a beautiful setting,
            under a sky far darker than what I'm used to.{" "}
            <Term
              label="Bortle 4"
              body="The Bortle Scale ranks night-sky darkness from 1 (pristine dark site) to 9 (inner-city sky). Class 4 is a rural transition zone — the Milky Way is clearly visible with structure, and most deep-sky objects are within reach."
            />{" "}
            versus{" "}
            <Term
              label="Bortle 7"
              body="Bortle Class 7 is a suburban/urban transition sky. The Milky Way is invisible to the naked eye and only the brightest deep-sky objects show through binoculars. Narrowband filters and long integrations are the price of admission."
            />
            , for those who want the hard numbers. Michigan is beautiful in
            its own right, but I don't have mountains or saguaro in my
            backyard.
          </p>

          <p style={bodyStyle} className="mt-6">
            I was traveling in a Jeep I'd rented. My wife has a Wrangler and
            we take it on adventures often enough that I'm comfortable with
            the capability and the limitations. That comfort turned out to
            be more relevant than I expected, because what this vehicle
            could and couldn't do was about to matter a great deal.
          </p>
        </RevealSection>

        <FigureBlock
          src={MWR_PRIMITIVE_ROAD}
          alt="Primitive Road, Use At Your Own Risk caution sign on a dirt road in the Arizona desert"
          caption="Caution — Use At Your Own Risk. The desert lets you in on its own terms."
        />

        <RevealSection>
          <p style={bodyStyle}>
            As I traveled down the road, I reminded myself of the core values
            that come with visiting a place like this. Ironwood is a national
            monument, and a lot of what surrounds it is private or tribal
            land. Knowing where those boundaries sit is not optional. I'm a
            guest out here, and I don't cross a fence line or a posted sign
            for any shot, period. Respecting the land is the price of
            admission.
          </p>
        </RevealSection>

        <PullQuote>
          I wish I could tell you I immediately turned around and chose
          safety over adventure. I didn't.
        </PullQuote>

        <RevealSection>
          <p style={bodyStyle}>
            Then there's everything the land is home to. This is rattlesnake
            and scorpion country, and they were here long before I showed up
            with a tripod. Good boots, watching where I put my hands and
            feet, and not wandering off in the dark without knowing the
            ground. Always bring more water than you think you need, because
            the desert pulls it out of you faster than you notice, and
            there's no gas station around the corner when you run dry.
          </p>

          <p style={bodyStyle} className="mt-6">
            And then there's the part nobody likes to talk about: other
            people. Remote desert roads attract a certain kind of solitude,
            and not all of it is the peaceful kind. Being alone, at night,
            far from help, means being honest with yourself about who else
            might be out there and what their intentions are.
          </p>

          <p style={bodyStyle} className="mt-6">
            About halfway to the monument, the relatively uneventful drive
            took a turn.
          </p>

          <p style={bodyStyle} className="mt-6">
            I'd decided to take the GPS-suggested route I had looked at
            before leaving. I even downloaded offline maps ahead of time,
            because losing signal out in a place like this is more the rule
            than the exception. The GPS pointed me down Sasco Road, and this
            is where I could have made a genuinely bad decision if I hadn't
            caught myself. There's a spot where Sasco Road meets the Santa
            Cruz River, and as it turns out, this crossing is well known in
            the area. Even the official sources mention that the road floods
            and closes regularly.
          </p>
        </RevealSection>

        <FigureBlock
          src={MWR_SASCO_CROSSING}
          alt="Flooded Sasco Road crossing of the Santa Cruz River, viewed from the hood of a Jeep"
          caption="The Sasco Road crossing at the Santa Cruz River — attempt number two, right before I finally backed out."
        />

        <RevealSection>
          <p style={bodyStyle}>
            I'd already passed several flooded spots on the way in, but
            nothing like what I saw when I reached this crossing. I wish I
            could tell you I immediately turned around and chose safety over
            adventure. I didn't. For some reason, I decided crossing this
            river was a perfectly reasonable thing to ask of a Jeep,
            conveniently ignoring that this was a 4-door JL Sahara, not a
            Rubicon. And I didn't try it once. I tried it twice.
          </p>

          <p style={bodyStyle} className="mt-6">
            A wiser man would have simply opened Google before the second
            attempt, especially since I still had signal at that point. But
            I, in all my wisdom, was caught up in the thrill. On the second
            attempt, feeling how hard the water was shoving against my
            mall-crawler tires, looking for my line and seeing nothing but
            churning, dirty water now climbing up to my door, I finally
            backed out for good. I slowed down and actually thought it
            through. This is a work trip. I'm a fairly important presence at
            this event. It wasn't working hours, sure, but I was in no rush
            to explain to anyone how I'd gotten myself stranded in the
            desert waiting on a tow truck for a rental. Risk versus reward
            won out, and I chose another route.
          </p>

          <p style={bodyStyle} className="mt-6">
            On the way back to the main road, every sign told me I'd made
            the right call. There was clear evidence of the kind of human
            activity you don't want to be anywhere near: abandoned camps,
            spent bullet casings, graffiti, the general feeling of a place
            where getting stuck would be a problem with no good ending.
          </p>

          <p style={bodyStyle} className="mt-6">
            This time I got off at Exit 236 near Marana and took Silverbell
            Road straight toward the monument. As I got close, I was almost
            giddy about the shot I was hoping to capture. Ironwood Forest is
            breathtaking, and it's remarkable that places like this still
            exist, largely untouched, preserving both the landscape and the
            deep history tied to this region long before any of us arrived.
          </p>
        </RevealSection>

        <FigureBlock
          src={MWR_IRONWOOD_SCOUT}
          alt="Daylight view of Ragged Top Mountain framed by saguaro cactus, Ironwood Forest National Monument"
          caption="Ragged Top Mountain, scouted in daylight. The composition I'd return for at 3:00 AM."
        />

        <RevealSection>
          <p style={bodyStyle}>
            As I worked my way along the primitive roads, I kept stopping to
            pull up{" "}
            <Term
              label="Stellarium"
              body="Stellarium is a free open-source planetarium app that simulates the sky for any location and time. Astrophotographers use it to plan compositions — checking exactly where the Milky Way core, the Moon, or a specific target will sit in the frame at the moment of capture."
            />{" "}
            and check exactly where the Milky Way would line up in my frame,
            so I could plan my composition precisely. I found what looked
            like a great spot and took a few test shots. Sure enough, I'd
            found something special. I dropped a GPS pin so I could find my
            way back, but not fully trusting its accuracy in the dark, I
            also took a series of photos of the surrounding landscape as
            backup landmarks. I took a deep breath, enjoyed the quiet and
            the majestic view in front of me for a moment, and then I headed
            to the conference.
          </p>

          <p style={bodyStyle} className="mt-6">
            After three nights and two days of conference, I woke up on
            roughly three hours of sleep at 12:30 AM, already packed and
            ready for the two-hour drive back to the spot I'd scouted.
          </p>
        </RevealSection>

        <PullQuote>
          ...3:00 AM also happens to be amateur hour.
        </PullQuote>

        <RevealSection>
          <p style={bodyStyle}>
            Driving in the desert at night has its own kind of charm. When I
            approached the monument during the day, I was in awe of the
            landscape: it's visually striking for someone who spends most of
            his time in cities. At night, you can't see anything but what's
            lit by the headlights. Until you step out of the car.
          </p>

          <p style={bodyStyle} className="mt-6">
            Every time I step out under a sky like this, it feels like the
            first time. I got chills immediately, from the sheer depth I
            could see in space with my own eyes. The starfield was
            absolutely immense, and I felt like I was standing inside one of
            the images I'd captured before, exposure cranked. We don't have
            skies like this where I live. Kalamazoo is heavily light-polluted
            in its own right, but a lot of people are surprised to learn we
            also suffer Chicago's light pollution, traveling 114 miles as
            the crow flies. That glow crosses a giant mirror, otherwise
            known as Lake Michigan, and lands right in our backyards.
          </p>

          <p style={bodyStyle} className="mt-6">
            After taking in the stars, my eyes started to adjust, and an
            ominous presence began to reveal itself toward the horizon. I
            stood there in awe as Ragged Top Mountain came into full view,
            backlit by Tucson's sky glow and the Milky Way itself. I was on
            a mission, but this was one of those moments, and it's something
            I'd encourage anyone to do. I paused for ten minutes and took in
            everything around me: the unforgettable views and the absolute
            silence of the desert.
          </p>
        </RevealSection>

        <FigureBlock
          src={MWR_RIG_AT_NIGHT}
          alt="Camera and tripod set up under the night sky among saguaros, Ironwood Forest National Monument"
          caption="Rig set, lens uncapped, headlamp on red. Three in the morning, and the work begins."
        />

        <RevealSection>
          <p style={bodyStyle}>
            As I started the capture, I was glad I'd prepared well. I hadn't
            forgotten any gear, my batteries were charged, I had enough gas,
            and I'd brought a jacket because it was getting cold (too cold
            for snakes, thankfully). Everything was going well. It had just
            turned 3:00 AM. And, for the uninitiated, 3:00 AM also happens
            to be "amateur hour."
          </p>

          <p style={bodyStyle} className="mt-6">
            I've been shooting Canon since the T3i. Mostly concert and
            live-event work, where my shutter speed was always as fast as I
            could push it. Over the last year I've shot primarily on astro
            cams with very long exposures. And "primarily" is carrying some
            weight in that sentence, because it had actually been about a
            year since I'd touched this camera. The word only earns its
            place because I decided, after this trip, that I needed to get
            reacquainted with it. Anyway, I felt like I knew how to use the
            camera. Oh man, was this a know-your-gear moment.
          </p>

          <p style={bodyStyle} className="mt-6">
            When I first set the camera on the tripod, I couldn't get my
            shutter speed slower than half a second. I sorted that out
            quickly, and I wouldn't even call it a real problem: I jumped
            into drive mode, switched to one-shot, and set up the built-in
            intervalometer to match what I needed. I only mention it because
            it instantly changed my headspace. The perfect night was
            starting to look a little more typical.
          </p>

          <p style={bodyStyle} className="mt-6">
            Still, it was going well. I let the camera rip while I recorded
            sequences for the YouTube video to go along with this trip. Once
            the sequences were done, it was time for a foreground shot.
            With a scene like this, the common approach is to stack short
            exposures of the sky and take one long exposure for the
            foreground. This is where I hit my final hurdle. And I didn't
            clear this hurdle. I didn't even clip it with my feet and keep
            running. I stopped at the hurdle, couldn't find my way around
            it, so I picked it up and carried it with me to finish the
            race. This hurdle is baked into my final image.
          </p>

          <p style={bodyStyle} className="mt-6">
            I couldn't get the longer foreground exposure I wanted, because
            I didn't know my camera well enough. When I tried to extend my
            exposure time, the longest I could manage was thirty seconds. A
            simple setting called bulb mode had escaped me. I didn't have
            Google, and I had to figure it out on my own. Which, to be
            fair, I probably would have. But I had a moment of growth, and
            a moment of clarity, that told me I didn't need to.
          </p>

          <p style={bodyStyle} className="mt-6">
            More on that in a second. Let's take a minute to acknowledge
            that knowing your gear cold is a big part of this hobby, and
            I'm as familiar with that as anyone who takes the craft
            seriously. The lesson from this trip wasn't about how well I
            know my gear, or about learning from my mistakes. For me, those
            aren't lessons anymore. They are strictly the rules. The lesson
            I took from that night was something else: one that brought me
            clarity.
          </p>

          <p style={bodyStyle} className="mt-6">
            I'm a perfectionist by nature, and if you're the same, you know
            it can be as much a liability as an asset. After struggling for
            a solid fifteen minutes, filling my head and body with stress
            and frustration, I stopped. I took everything in, the way I had
            when I first stepped out of the car, and I realized that
            everything I was trying to capture was right there in front of
            me. Just like that, my priorities shifted.
          </p>
        </RevealSection>

        <RevealSection>
          <p style={bodyStyle} className="mt-6">
            Astrophotography is an exercise in patience. It teaches us to
            manage our frustrations, builds discipline, and drives home the
            importance of being prepared. Those skills carry over into
            everyday life, and the payoff is a unique satisfaction that's
            hard to find anywhere else. But the real lesson that night
            wasn't about any of that. You can miss the shot, you can make
            mistakes. Never forget to stop and look up.
          </p>
        </RevealSection>

        <SectionBreak />

        <RevealSection>
          <p style={bodyStyle}>
            And here it is. The shot I drove two hours back for, on three
            hours of sleep, after a river turned me around and a camera
            setting humbled me. I'm proud of this one. The sky is 16 stacked
            five-second exposures at ISO 6400, shot on a Canon R5 Mark II
            with a Canon 24mm at f/1.4. The foreground is that single frame
            I fought so hard for: 30 seconds at ISO 3200, capped right
            there because bulb mode and I weren't on speaking terms yet.
            Ragged Top Mountain holds the foreground, backlit by Tucson's
            distant glow, with the core climbing straight up out of the
            desert exactly the way I'd planned it during the daylight
            scout. Is it perfect? No. I know exactly where it falls short,
            and I'll know even better next year. Because that's the thing
            about the Milky Way: it isn't going anywhere. The core will
            rise again next spring, a little higher, a little earlier, and
            I'll be there to meet it. Better prepared, and probably with a
            few new lessons waiting for me. That's the patience this whole
            thing runs on.
          </p>
        </RevealSection>

        <FigureBlock
          src={MWR_HERO}
          alt="The Milky Way core rising over Ragged Top Mountain, Ironwood Forest National Monument, Arizona"
          caption="The Milky Way core over Ragged Top Mountain · Canon R5 II · Canon RF 24mm f/1.4 · Sky: 16 × 5s @ ISO 6400 · Foreground: 30s @ ISO 3200"
        />

        {/* ── Closing actions ── */}
        <RevealSection>
          <div className="mt-16">
            <hr className="gold-rule mb-10" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link href="/">
                <span
                  className="nav-label flex items-center gap-2 transition-colors duration-200"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                >
                  <ArrowLeft size={14} /> Back to Home
                </span>
              </Link>
              <Link href="/about">
                <button className="btn-ghost-gold">Read Our Story</button>
              </Link>
            </div>
          </div>
        </RevealSection>
      </article>

      <Footer />
    </div>
  );
}
