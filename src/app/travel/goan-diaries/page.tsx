import type { Metadata } from "next";
import { Clip, MonoLabel, Photo, Story, TravelFooter, TravelTopBar } from "../components";

export const metadata: Metadata = {
  title: "Goan Diaries | Jubin Philip",
  description:
    "Seven friends, two days, zero planning — a sudden trip to Goa in the Okha Express general compartment, told in photos and short stories.",
};

export default function GoanDiaries() {
  return (
    <div className="bg-paper text-ink min-h-screen">
      <TravelTopBar />

      {/* hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <MonoLabel>Off the Clock — Travel Journal</MonoLabel>
        <h1 className="mt-6 text-5xl md:text-7xl leading-[1.02] tracking-tight font-light max-w-3xl">
          Some systems are best debugged{" "}
          <em className="font-medium text-accent">outdoors</em>.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          When I&apos;m not tuning queries or draining queues, I&apos;m usually on the road —
          chasing hill stations, coastlines, and quiet places across India. A few recent
          trips, in photos and short notes.
        </p>
      </section>

      {/* Goan Diaries */}
      <article className="max-w-5xl mx-auto px-6 pb-24">
        {/* trip header */}
        <div className="border-t border-line pt-14 max-w-2xl">
          <span className="text-5xl font-light text-ink-faint">01</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight">Goan Diaries</h2>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            Seven Friends · Two Days · Zero Planning
          </p>
          <p className="mt-4 text-ink-soft">Goa, West Coast of India · 24 — 27 July 2026</p>
          <p className="mt-5 text-lg italic text-ink-soft leading-relaxed">
            A trip that was supposed to be Amboli, became Goa two days before departure, and
            turned into the best kind of chaos.
          </p>
        </div>

        <div className="mt-20 space-y-20 md:space-y-24">
          {/* the plan + train */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <MonoLabel>23 July · The plan changes</MonoLabel>
              <Story>
                This trip was never supposed to be Goa. Ruby&apos;s original pitch was Amboli — and
                then, two days before departure, the destination quietly changed. We booked a
                package with LuxiGo, and without pausing to think it through, walked straight into
                the general compartment of the Okha Express. We were supposed to be eight, but
                Adarsh got kidnapped at the last minute by &ldquo;serious work&rdquo; at his
                company — so Suraj, Anandu, Rosemary, Ruby, Lakshmi and I boarded at Ernakulam
                Junction, and Sanjo joined at Kozhikode, walking in with a bag of chips like a
                man who understood exactly what a sixteen-hour journey needed. Seven of us,
                rattling up the coast to Thivim.
              </Story>
            </div>
            <Photo
              src="/travel/goa-7.jpeg"
              alt="All seven of us together aboard the Okha Express on the way to Goa"
              caption="Aboard the Okha Express"
              aspect="aspect-[16/10]"
            />
          </section>

          {/* manglish + pull quote */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <figure className="md:order-first order-last rounded-2xl border border-line bg-paper-raise p-10 text-center">
              <blockquote className="text-3xl md:text-4xl font-light italic leading-snug">
                &ldquo;Ithil <span className="text-accent">kayarikko</span>.&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                — a Goan bus conductor, replying to our Hindi in perfect Malayalam
              </figcaption>
            </figure>
            <div>
              <MonoLabel>Thivim · First contact</MonoLabel>
              <Story>
                Goa wasted no time testing our Hindi. Our resort was in Calangute, and our
                package operator had given us the route: a bus from Thivim railway station to
                Mapusa, then another from Mapusa to Calangute. So we assembled our finest
                sentence —
                &ldquo;Mapusa or Calangute se janekar bus kidhar se milega… hamem kuch kuch
                Hindi maloom&rdquo; — and the conductor
                looked at us with great patience and replied in flawless Malayalam. We had
                travelled 800 kilometres to be told &ldquo;get in&rdquo; in our own mother tongue,
                on a Goan bus playing Malayalam songs. Later, with the same broken Hindi, we
                contacted the operator&apos;s man over the phone and collected our scooters for
                two days — which honestly deserves a certificate.
              </Story>
            </div>
          </section>

          {/* day one + baga */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <MonoLabel>Day one · Rain had other plans</MonoLabel>
              <Story>
                After a good meal and a quick freshen-up at the resort, day one had a plan —
                Anjuna Fort — but the Goan monsoon had other plans and washed it out completely.
                So we surrendered, wandered along Candolim Beach instead, and as the evening set
                in, drifted to Baga — barely a kilometre from our resort. The beach was packed:
                music from every shack, crowds everywhere, and rows of straw umbrellas strung
                with fairy lights glowing over the sand long after dark.
              </Story>
            </div>
            <Photo
              src="/travel/goa-3.jpeg"
              alt="Baga beach shacks glowing with fairy lights at night"
              caption="Baga after dark"
              aspect="aspect-[4/3]"
            />
          </section>

          {/* bangle incident */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Photo
              src="/travel/goa-9.png"
              alt="AI-illustrated recreation of the bangle incident at Baga beach — Anandu mid-escape"
              caption="The bangle incident — an AI reconstruction"
              aspect="aspect-[3/2]"
            />
            <div>
              <MonoLabel>Baga, later that night · The bangle incident</MonoLabel>
              <Story>
                That night Baga gave us the trip&apos;s greatest legend: an eight-year-old girl
                selling coloured bangles pressed them into Anandu&apos;s hands, asked for ₹100,
                and then simply refused to take them back — she just stood there smiling
                beautifully while he was left holding bangles he never asked for. He finally set
                them down on the sand and ran; she chased. He looped back from the far side; she
                spotted him within seconds and chased again. Somehow we got away — but it took
                all seven of us to escape one eight-year-old.
              </Story>
            </div>
          </section>

          {/* day two: anjuna fort */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <MonoLabel>Day two · Anjuna Fort, finally</MonoLabel>
              <Story>
                The second morning — and sadly the last — we checked out of the resort early and
                went straight back for the fort the rain had stolen from us. Anjuna did not
                disappoint: centuries-old laterite ramparts, monsoon wind strong enough to steal
                a cap, green cliffs dropping into the sea, and all seven of us finally lined up
                on the fort wall for the one group photo the whole trip demanded.
              </Story>
            </div>
            <Photo
              src="/travel/goa-1.jpeg"
              alt="All of us on the laterite ramparts of Anjuna Fort"
              caption="All seven, on Anjuna Fort"
              aspect="aspect-[3/4]"
              className="max-w-sm w-full justify-self-center md:justify-self-end"
              sizes="24rem"
            />
          </section>

          {/* the sea below */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Clip
              src="/travel/anjuna-sea.mp4"
              caption="The Arabian Sea, below the fort walls"
              aspect="aspect-[3/4]"
              className="max-w-sm w-full justify-self-center md:justify-self-start order-last md:order-first"
            />
            <div>
              <MonoLabel>From the ramparts</MonoLabel>
              <Story>
                Below the walls, the Arabian Sea was putting on its full monsoon show — grey,
                loud, and endless, waves hammering the rocks where the red laterite cliffs meet
                the water. No reel, no filter, just the sea doing its thing. We stood there
                watching far longer than any itinerary would allow, and nobody complained.
              </Story>
            </div>
          </section>

          {/* basilica */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <MonoLabel>Old Goa · Basilica of Bom Jesus</MonoLabel>
              <Story>
                From the fort we rode to Old Goa and the Basilica of Bom Jesus — one of the
                oldest churches in India, its weathered red-brown facade standing since the
                1600s. Inside rests the body of St. Francis Xavier, preserved without decay for
                over four centuries — something you read about, and then stand in front of, and
                still can&apos;t quite process. Even a loud gang of seven goes completely quiet
                in there.
              </Story>
            </div>
            <Photo
              src="/travel/goa-2.jpeg"
              alt="Facade of the Basilica of Bom Jesus, Old Goa"
              caption="Basilica of Bom Jesus, Old Goa"
              aspect="aspect-[3/4]"
              className="max-w-sm w-full justify-self-center md:justify-self-end"
              sizes="24rem"
            />
          </section>

          {/* fontainhas */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Photo
              src="/travel/goa-4.jpeg"
              alt="A fun painted wall in the lanes of Fontainhas"
              caption="Fontainhas being Fontainhas"
              aspect="aspect-[3/4]"
              className="max-w-sm w-full justify-self-center md:justify-self-start order-last md:order-first"
              sizes="24rem"
            />
            <div>
              <MonoLabel>Panjim · Fontainhas</MonoLabel>
              <Story>
                Next came Fontainhas, Panjim&apos;s old Latin Quarter — narrow lanes of
                Portuguese-era houses in yellows and blues, and basically an open-air gallery.
                Every corner has a mural, every wall has a joke to tell: cartoon bartenders
                pouring beer, sunbathers, beach umbrellas — Goa laughing at itself in paint. We
                parked the scooters, walked slowly, and let the walls do the talking.
              </Story>
            </div>
          </section>

          {/* thali */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <MonoLabel>Lunch · Done properly</MonoLabel>
              <Story>
                By then all the riding and walking had left us properly starving — and like a
                sign from above, a restaurant appeared with a board announcing Goan thali meals
                available. We walked in without a second thought. Out came the steel platters:
                fried fish, fish curry, clams, vegetable sides, salad, and a mountain of rice.
                Seven hungry Malayalis versus one Goan thali each — zero regrets, zero leftovers.
              </Story>
            </div>
            <Photo
              src="/travel/goa-8.jpeg"
              alt="A proper Goan fish thali — fried fish, curries, and rice on a steel platter"
              caption="One proper Goan fish thali"
              aspect="aspect-[3/4]"
              className="max-w-sm w-full justify-self-center md:justify-self-end"
              sizes="24rem"
            />
          </section>

          {/* mandovi */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Clip
              src="/travel/goa-video.mp4"
              caption="Casino ships on the Mandovi, Panjim"
              aspect="aspect-[3/4]"
              className="max-w-sm w-full justify-self-center md:justify-self-start order-last md:order-first"
            />
            <div>
              <MonoLabel>Mandovi riverfront</MonoLabel>
              <Story>
                Down on the Mandovi riverfront, Panjim&apos;s famous floating casinos glide past
                like buildings that learned to swim — deck upon deck of lights drifting along the
                river. We watched the Deltin Royale slide by from the promenade, the evening
                breeze coming off the water and Panjim&apos;s lights blinking on one by one behind
                us — a quiet little pause before the rush of getting home began.
              </Story>
            </div>
          </section>

          {/* homeward */}
          <section className="max-w-2xl mx-auto text-center">
            <MonoLabel>Evening · Homeward</MonoLabel>
            <Story>
              By evening we had bought gifts for friends and family, and — with our kuch kuch
              knowledge of Hindi guiding us through three buses — reached Madgaon railway
              station, where we survived a four-hour wait on the platform before the Duronto
              Express finally rolled in. We boarded the way every good trip should end —
            </Story>
            <p className="mt-8 text-2xl md:text-3xl font-light italic leading-snug">
              Empty wallets. Bags full of laundry.{" "}
              <span className="text-accent">Hearts full of memories.</span>
            </p>
          </section>
        </div>
      </article>

      <TravelFooter />
    </div>
  );
}
