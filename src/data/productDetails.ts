export interface ProductStoryChapter {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  caption: string;
}

export interface ProductDetailContent {
  edition: string;
  origin: string;
  craftTitle: string;
  intro: [string, string];
  craftNotes: Array<{ label: string; value: string }>;
  quote: string;
  chapters: [ProductStoryChapter, ProductStoryChapter, ProductStoryChapter];
}

export const PRODUCT_DETAILS: Record<string, ProductDetailContent> = {
  'caelum-platform-bed': {
    edition: 'No. 01 / 2026',
    origin: 'New York / Pennsylvania',
    craftTitle: 'A bed drawn as a quiet piece of architecture.',
    intro: [
      'Caelum is built around a low walnut plinth that appears to hold the mattress just above the floor. The broad headboard gives the room a calm horizon without becoming a wall in itself.',
      'Every visible board is selected for grain continuity before the frame is cut. The upholstered panel can be specified in the house wool or a client-supplied textile, with the proportions adjusted for the room.',
    ],
    craftNotes: [
      { label: 'Joinery', value: 'Drawbored mortise and tenon' },
      { label: 'Finish', value: 'Hand-rubbed natural oil' },
      { label: 'Upholstery', value: 'House wool or COM' },
    ],
    quote: 'A generous bed should make the room feel quieter, not fuller.',
    chapters: [
      {
        eyebrow: '01 / Proportion',
        title: 'A low horizon',
        body: 'The plinth sits deep within the frame, creating a fine shadow beneath the mattress. Rounded corners soften the bed’s scale while keeping its silhouette precise.',
        image: '/images/collection-bed.webp',
        imageAlt: 'Low walnut platform bed centered against a paneled wall',
        caption: 'Caelum / Queen size in American walnut',
      },
      {
        eyebrow: '02 / Material',
        title: 'Built around the grain',
        body: 'Long walnut boards are paired before machining so the grain reads continuously around the rails. A matte oil finish keeps the timber tactile and repairable over time.',
        image: '/images/collection-table.webp',
        imageAlt: 'Close view of a dark timber surface showing natural grain',
        caption: 'Material study / Hand-rubbed timber finish',
      },
      {
        eyebrow: '03 / In residence',
        title: 'Softness at the edge',
        body: 'The upholstered panel is deliberately shallow. It brings comfort where the body meets the piece, while the surrounding walnut retains the bed’s architectural character.',
        image: '/images/project-park-avenue.webp',
        imageAlt: 'Quiet pre-war room with warm timber and softly upholstered furniture',
        caption: 'Residential study / Upper East Side',
      },
    ],
  },
  'rook-dining-table': {
    edition: 'No. 02 / 2026',
    origin: 'New York / Hudson Valley',
    craftTitle: 'A dining table with weight at the center and ease at the edge.',
    intro: [
      'Rook begins with a substantial top, eased along its perimeter so the edge feels thinner in the hand than it appears from across the room. Two broad supports leave the corners clear and comfortable.',
      'The ebonized finish follows the oak rather than masking it. Cast bronze shoes protect the base and introduce a small change in tone at floor level.',
    ],
    craftNotes: [
      { label: 'Construction', value: 'Book-matched solid oak top' },
      { label: 'Finish', value: 'Hand-ebonized and waxed' },
      { label: 'Base', value: 'Patinated cast bronze' },
    ],
    quote: 'The table holds the room together before anything is placed on it.',
    chapters: [
      {
        eyebrow: '01 / Surface',
        title: 'Depth without gloss',
        body: 'The oak is wire-brushed before ebonizing, allowing its open grain to remain visible. The finish changes subtly as daylight moves across the top.',
        image: '/images/collection-table.webp',
        imageAlt: 'Close view of an ebonized timber dining table surface',
        caption: 'Rook / Ebonized oak surface study',
      },
      {
        eyebrow: '02 / Scale',
        title: 'Room for the chair',
        body: 'Supports are pulled inward to keep the perimeter open. This gives every place setting the same generous clearance and makes the table useful from breakfast through a crowded dinner.',
        image: '/images/service-build.webp',
        imageAlt: 'Dining room with a sculptural table and timber chairs',
        caption: 'Scale study / Dining room installation',
      },
      {
        eyebrow: '03 / Company',
        title: 'An anchor after dark',
        body: 'A dark table gives pale rooms a point of gravity. Bronze at the base catches the lowest light while the surface recedes beneath objects, food, and conversation.',
        image: '/images/project-riverside.webp',
        imageAlt: 'Dark oval dining table in a softly lit formal room',
        caption: 'Residential study / Riverside Drive',
      },
    ],
  },
  'aster-lounge-chair': {
    edition: 'No. 03 / 2026',
    origin: 'New York / Copenhagen',
    craftTitle: 'The frame is read at a glance; comfort appears on contact.',
    intro: [
      'Aster uses a continuous ash frame to describe the chair’s structure without ornament. The back tilts gently from the seat, giving the piece an easy posture and a compact footprint.',
      'Danish cord is woven directly around the rails in a dense envelope pattern. It softens with use while retaining the tension needed to support the body.',
    ],
    craftNotes: [
      { label: 'Frame', value: 'Steam-bent bleached ash' },
      { label: 'Seat', value: 'Hand-woven Danish cord' },
      { label: 'Finish', value: 'Soap and white oil' },
    ],
    quote: 'The comfort comes from proportion and tension, not padding.',
    chapters: [
      {
        eyebrow: '01 / Frame',
        title: 'Structure in plain view',
        body: 'The back rail, arms, and rear legs meet in one legible gesture. Small changes in section place strength where it is needed and lightness where the hand meets the chair.',
        image: '/images/collection-chair.webp',
        imageAlt: 'Detailed view of a woven cord chair beneath a dark table',
        caption: 'Aster / Bleached ash and Danish cord',
      },
      {
        eyebrow: '02 / Handwork',
        title: 'Tension, repeated',
        body: 'Each seat is woven by one craftsperson. The pattern becomes denser at the front edge, where it protects the cord and gives the sitter a more forgiving surface.',
        image: '/images/service-decor.webp',
        imageAlt: 'Caned lounge chair in a softly restored paneled room',
        caption: 'Material context / Natural fibers and pale timber',
      },
      {
        eyebrow: '03 / Around a table',
        title: 'A quieter silhouette',
        body: 'The open frame remains visually light in groups. Its cord surface introduces texture without competing with art, stone, or the architecture around it.',
        image: '/images/project-riverside.webp',
        imageAlt: 'Dining chairs arranged around an oval table',
        caption: 'Residential study / Tonal dining room',
      },
    ],
  },
  'tessera-wall-cabinet': {
    edition: 'No. 04 / 2026',
    origin: 'New York / Brooklyn',
    craftTitle: 'Storage designed as part of the room’s architecture.',
    intro: [
      'Tessera combines closed storage, open shelving, and vertical fins in one continuous elevation. The proportions can be adjusted to frame a doorway, fireplace, or the length of a dining wall.',
      'Each commission begins with a measured drawing of its room. Shelf heights, door divisions, and hardware positions are then composed around the client’s books, objects, and daily routines.',
    ],
    craftNotes: [
      { label: 'Cabinetry', value: 'Fumed quarter-sawn oak' },
      { label: 'Hardware', value: 'Lost-wax cast bronze' },
      { label: 'Installation', value: 'Site measured and fitted' },
    ],
    quote: 'Storage works best when it gives the room an order of its own.',
    chapters: [
      {
        eyebrow: '01 / Elevation',
        title: 'An ordered wall',
        body: 'Deep vertical fins establish a steady rhythm, while thinner horizontal shelves allow books and objects to shift over time. Closed cabinets keep practical storage close at hand.',
        image: '/images/collection-storage.webp',
        imageAlt: 'Architectural oak wall cabinet with shelves and closed storage',
        caption: 'Tessera / Fumed oak wall composition',
      },
      {
        eyebrow: '02 / Commission',
        title: 'Measured to the room',
        body: 'No two elevations use exactly the same spacing. Sightlines, ceiling height, and the furniture placed in front determine the final balance of open and closed elements.',
        image: '/images/about-hero.webp',
        imageAlt: 'Long custom timber cabinet fitted within a quiet interior',
        caption: 'Millwork study / Site-specific proportions',
      },
      {
        eyebrow: '03 / Continuity',
        title: 'Furniture becoming architecture',
        body: 'At full scale, Tessera moves beyond freestanding storage. Shadow lines and grain direction connect it to wall paneling, doors, and the larger architectural envelope.',
        image: '/images/service-design.webp',
        imageAlt: 'Glass and timber addition with disciplined architectural lines',
        caption: 'Architectural context / Timber and blackened steel',
      },
    ],
  },
  'orbis-pedestal-table': {
    edition: 'No. 05 / 2026',
    origin: 'New York / Vermont',
    craftTitle: 'A pedestal table balanced between stone and shadow.',
    intro: [
      'Orbis is shaped around the social ease of a round table. A finely tapered stone top floats above a dark conical base, leaving every seat unobstructed.',
      'The limestone is selected for quiet movement rather than dramatic veining. Each edge is finished by hand to make the stone appear light while retaining enough material for daily use.',
    ],
    craftNotes: [
      { label: 'Top', value: 'Honed Vermont limestone' },
      { label: 'Base', value: 'Blackened structural steel' },
      { label: 'Edge', value: 'Hand-finished reverse bevel' },
    ],
    quote: 'A round table asks the room to gather around its center.',
    chapters: [
      {
        eyebrow: '01 / Balance',
        title: 'Stone held lightly',
        body: 'A reverse bevel removes visual weight from the perimeter. The top reads as a thin plane from standing height, while the full stone thickness remains protected beneath.',
        image: '/images/project-carnegie-hill.webp',
        imageAlt: 'Round stone pedestal table centered in an arched hall',
        caption: 'Orbis / Honed limestone and blackened steel',
      },
      {
        eyebrow: '02 / Touch',
        title: 'A surface that records use',
        body: 'The honed finish is smooth without being reflective. Over time, handling and daily cleaning deepen the stone’s tone rather than leaving a polished, untouchable surface.',
        image: '/images/collection-table.webp',
        imageAlt: 'Close detail of a matte tabletop with small objects',
        caption: 'Surface study / Matte finish and eased edge',
      },
      {
        eyebrow: '03 / Center',
        title: 'One clear gesture',
        body: 'With no corners and no legs at the perimeter, movement around Orbis remains easy. The single base gives formal rooms a concise contemporary center.',
        image: '/images/service-build.webp',
        imageAlt: 'Sculptural pedestal table surrounded by timber chairs',
        caption: 'Residential study / Central dining room',
      },
    ],
  },
  'sella-dining-chair': {
    edition: 'No. 06 / 2026',
    origin: 'New York / North Carolina',
    craftTitle: 'A dining chair reduced to the gestures that matter.',
    intro: [
      'Sella pairs a shaped walnut frame with a broad cord seat and gently curved back. It is narrow enough to sit comfortably in a group, but substantial enough to use away from the table.',
      'The back rail is carved from solid timber to support the shoulder blades without pressing into the spine. Paper cord is woven in a double layer for resilience and a clean underside.',
    ],
    craftNotes: [
      { label: 'Frame', value: 'Carved Appalachian walnut' },
      { label: 'Seat', value: 'Double-woven paper cord' },
      { label: 'Finish', value: 'Oiled and hand-waxed' },
    ],
    quote: 'A dining chair should disappear from thought once the evening begins.',
    chapters: [
      {
        eyebrow: '01 / Profile',
        title: 'Support in one line',
        body: 'The back rail follows a shallow arc from shoulder to shoulder. Its softened top edge offers support without forcing the body into one fixed position.',
        image: '/images/collection-chair.webp',
        imageAlt: 'Close view of walnut chair backs and woven seats',
        caption: 'Sella / Walnut frame and woven cord',
      },
      {
        eyebrow: '02 / In company',
        title: 'Designed to repeat',
        body: 'Sella’s narrow frame creates a steady rhythm around a table. The warm walnut and woven seat hold their own against darker furniture without becoming graphic or severe.',
        image: '/images/project-riverside.webp',
        imageAlt: 'Dining chairs gathered around a dark oval table',
        caption: 'Residential study / Full dining set',
      },
      {
        eyebrow: '03 / Longevity',
        title: 'Made to be renewed',
        body: 'The seat can be rewoven and the timber finish refreshed without dismantling the chair. Materials are joined mechanically so each part can age, be repaired, and return to use.',
        image: '/images/collection-storage.webp',
        imageAlt: 'Warm oak interior with handcrafted chairs and cabinetry',
        caption: 'Material context / Timber, cord, and bronze',
      },
    ],
  },
};
