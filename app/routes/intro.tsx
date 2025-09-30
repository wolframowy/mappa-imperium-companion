import type { Route } from "./+types/intro";

export default function Intro() {
  return (
    <div className="flex @md:flex-col flex-wrap px-5 py-6 gap-4 w-full h-full overflow-y-auto">
      <div className="max-w-lg">
        <h3>Basics</h3>
        <p>
          In Mappa Imperium, you and any number of friends will take control of
          an entire fantasy world. Dividing the map equally and working together
          you will create unique landmasses, geography, and resources for your
          world. From there each player will take command of a kingdom and
          develop it from a struggling settlement to a massive empire, or
          perhaps, drive it into the lost histories of time. Each player will
          take turns rolling the dice and placing features into their section of
          the map. Each of these regions will be home to one major empire and
          many smaller factions. Throughout the game each player will create the
          story of the empires within their play area. They will roll dice to
          decide many aspects of the world but much of the story and design will
          be up to each player's imagination
        </p>
        <div>
          <p>
            Mappa Imperium is first and foremost a cooperative storytelling game
            and is played best when the players work together. By the end of the
            game you will have a full fantasy map complete with empires, lore,
            hostile tribes, and horrific monsters.
          </p>
        </div>
      </div>
      <div className="max-w-lg">
        <h4>Setup</h4>
        <p>
          Divide your sheet of paper equally by the number of players. You can
          draw a line or create a fold to help separate the regions. Each player
          will take control of one of these regions (They will be referred to as
          “Home Regions” going forth)
        </p>
      </div>
      <div className="max-w-lg">
        <h4>Solo Play</h4>
        <p>
          <b>Use the game as a world generation tool</b>
          To play solo, divide the paper into the number of major empires you
          wish to have, then play commences taking turns as usual.
        </p>
      </div>
      <div className="max-w-lg">
        <h4>Multiplayer</h4>
        <p>
          Mappa Imperium can be played with more than a few players and even
          large groups. Rather than using one sheet of paper for the world, each
          player will have their own sheet and that will be their “Home Region”.
          Once the game is complete you can attach the separate sheets of paper
          creating one large map.
        </p>
      </div>
      <div className="max-w-lg">
        <h4>Drawing</h4>
        <p>
          Throughout the course of the game you will be drawing features of your
          world and empire onto the paper; from forests and mountains, to cities
          and monsters. If drawing is not your strong suit feel free to use
          simple symbols and icons to represent details on your map. The
          different drawing styles of each player will give your finished map a
          unique charm and help distinguish each empire.
        </p>
      </div>
      <div className="max-w-lg">
        <h3>Play Overview</h3>
        <p>
          Mappa Imperium is designed to be played alongside this rulebook. Keep
          it nearby and follow along as you advance through the ages and develop
          your map. There are 6 phases of the game called eras. Each of these
          develop and progress the story of your world and contain different
          tables to reference when rolling the dice. Once an era is complete,
          players will advance to the next. Each turn of eras 4-6 consists of
          around 10 years. With Era 3 lasting 30 years, you will end up with a
          200 year history on a standard game, plus a pantheon and mythology to
          go with it.
        </p>
      </div>
    </div>
  );
}
