export interface ProjectChapter {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  caption: string;
}

export interface ProjectDetailContent {
  typology: string;
  duration: string;
  introTitle: string;
  intro: [string, string];
  scope: string[];
  materials: string[];
  quote: string;
  chapters: [ProjectChapter, ProjectChapter, ProjectChapter];
}

export const PROJECT_DETAILS: Record<string, ProjectDetailContent> = {
  'park-avenue-duplex': {
    typology: 'Pre-war duplex',
    duration: '18 months',
    introTitle: 'Restoring sequence and quiet to a generous pre-war plan.',
    intro: [
      'The original apartment had gracious proportions but no clear relationship between its two floors. We rebuilt the circulation around a central stair, making arrival, daily life, and entertaining feel like parts of one continuous home.',
      'Historic plasterwork and trim were repaired rather than simplified. New millwork, stone, and lighting were introduced with a quieter profile so the apartment still reads as belonging to its building.',
    ],
    scope: ['Spatial replanning', 'Kitchen and baths', 'Plaster restoration', 'Custom millwork', 'Lighting and furnishing'],
    materials: ['American walnut', 'Honed limestone', 'Hand-finished plaster', 'Aged brass'],
    quote: 'The apartment needed fewer gestures, made with greater conviction.',
    chapters: [
      {
        eyebrow: '01 / Arrival',
        title: 'Reframing the first view',
        body: 'A long sightline now links the entry to the principal rooms. Paneled openings frame each transition, while a limited palette lets daylight and the client’s art carry the sequence.',
        image: '/images/project-carnegie-hill.webp',
        imageAlt: 'Arched entry hall with a sculptural round table and stone floor',
        caption: 'Entry hall / Custom plaster and stone floor',
      },
      {
        eyebrow: '02 / Architecture',
        title: 'Old rooms, new rhythm',
        body: 'The living floor remains formal without feeling fixed. Restored moldings, concealed storage, and broad openings give the rooms definition while allowing family life to move comfortably through them.',
        image: '/images/project-park-avenue.webp',
        imageAlt: 'Paneled pre-war living room with fireplace and quiet tonal furnishings',
        caption: 'Principal living room / Restored architectural envelope',
      },
      {
        eyebrow: '03 / Decoration',
        title: 'A collected finish',
        body: 'Furniture was selected for shape and patina rather than period. Contemporary upholstery, a caned chair, and small antique pieces bring warmth to the pale architectural shell.',
        image: '/images/service-decor.webp',
        imageAlt: 'Light paneled sitting room with a cane chair and sculptural branches',
        caption: 'Private sitting room / Furniture and art curation',
      },
    ],
  },
  'carnegie-hill-residence': {
    typology: 'Pre-war apartment',
    duration: '14 months',
    introTitle: 'A calm central axis gives the apartment its sense of ceremony.',
    intro: [
      'The renovation began with the entry, where a sequence of curved openings now connects rooms that had felt separate and compressed. The geometry feels deliberate, but never showy.',
      'Custom stone, darkened oak, and hand-finished plaster establish a restrained material language that continues through the apartment. Each detail was scaled to the original rooms and their generous ceiling height.',
    ],
    scope: ['Entry reconfiguration', 'Stone flooring', 'Architectural millwork', 'Decorative lighting', 'Furniture selection'],
    materials: ['Ebonized oak', 'Arabescato marble', 'Lime plaster', 'Blackened steel'],
    quote: 'The strongest move was also the quietest: letting the architecture set the pace.',
    chapters: [
      {
        eyebrow: '01 / Threshold',
        title: 'An entry with purpose',
        body: 'The new hall is both pause and passage. Curved openings soften the long plan, while the graphic floor and round table establish a centered moment on arrival.',
        image: '/images/project-carnegie-hill.webp',
        imageAlt: 'Symmetrical arched entry hall with pendant lights and patterned stone floor',
        caption: 'Entry gallery / Arabescato and Belgian bluestone',
      },
      {
        eyebrow: '02 / Living',
        title: 'Holding onto the building',
        body: 'Existing proportions were preserved wherever possible. New work borrows the depth and shadow of the original trim, allowing contemporary furniture to sit naturally within the shell.',
        image: '/images/project-park-avenue.webp',
        imageAlt: 'Quiet pre-war living room framed by a paneled doorway',
        caption: 'Living room / Restored moldings and custom millwork',
      },
      {
        eyebrow: '03 / Gathering',
        title: 'A room for evening',
        body: 'In the dining room, dark forms anchor the pale envelope. The lighting was calibrated to create intimacy after sunset without competing with the room’s original ornament.',
        image: '/images/project-riverside.webp',
        imageAlt: 'Formal dining room with dark table and sculptural chandelier',
        caption: 'Dining room / Custom table and collected ceramics',
      },
    ],
  },
  'riverside-residence': {
    typology: 'Riverside apartment',
    duration: '7 months',
    introTitle: 'Decoration that makes formal rooms feel generous rather than precious.',
    intro: [
      'The clients wanted to retain the apartment’s formality while making every room useful throughout the day. A revised furniture plan opened circulation and created smaller places to read, gather, and work.',
      'Tonal upholstery and dark timber give the rooms definition without relying on contrast. Art, ceramics, and vintage lighting keep the result personal and slightly unexpected.',
    ],
    scope: ['Furniture planning', 'Lighting selection', 'Art placement', 'Custom textiles', 'Styling and installation'],
    materials: ['Mohair', 'Ebonized oak', 'Patinated bronze', 'Hand-knotted wool'],
    quote: 'Comfort and formality do not have to be opposites.',
    chapters: [
      {
        eyebrow: '01 / Dining',
        title: 'A softer kind of formality',
        body: 'Rounded furniture and a low, dark palette bring intimacy to the dining room. The chandelier’s delicate vertical line balances the weight of the table below.',
        image: '/images/project-riverside.webp',
        imageAlt: 'Tonal dining room with an oval table and tiered chandelier',
        caption: 'Dining room / Vintage lighting and custom upholstery',
      },
      {
        eyebrow: '02 / Daily life',
        title: 'One table, many uses',
        body: 'A sculptural table creates a less formal counterpoint elsewhere in the apartment. Its position in the plan lets the room move easily between breakfast, homework, and long dinners.',
        image: '/images/service-build.webp',
        imageAlt: 'Paneled dining room with sculptural white table and timber chairs',
        caption: 'Breakfast room / Custom table and restored paneling',
      },
      {
        eyebrow: '03 / Layers',
        title: 'Objects with memory',
        body: 'New pieces sit beside family furniture, books, and art collected over time. The combination makes the apartment feel established from the first day rather than newly decorated.',
        image: '/images/service-decor.webp',
        imageAlt: 'Bright paneled room with antique furniture and natural branches',
        caption: 'Library / Client collection and new commissions',
      },
    ],
  },
  'east-72nd-street-apartment': {
    typology: 'Pre-war apartment',
    duration: '6 months',
    introTitle: 'A lighter edit allows the apartment’s original character to lead.',
    intro: [
      'Rather than replace what was already working, we refined the collection and clarified how each room would be used. The result feels assembled over time, with space left for future finds.',
      'Linen, cane, pale stone, and dark accents create a measured contrast against the white paneled rooms. Art is given breathing room, while every piece earns its place through daily use.',
    ],
    scope: ['Collection edit', 'Furniture sourcing', 'Window treatments', 'Art placement', 'Final styling'],
    materials: ['Caned oak', 'Washed linen', 'Travertine', 'Antique brass'],
    quote: 'Nothing was chosen to announce itself; everything was chosen to belong.',
    chapters: [
      {
        eyebrow: '01 / Edit',
        title: 'Keeping room around the objects',
        body: 'A restrained plan gives individual pieces greater presence. The cane chair and small artworks bring texture without interrupting the architecture’s calm vertical lines.',
        image: '/images/service-decor.webp',
        imageAlt: 'White paneled room with cane chair, fireplace, and branches',
        caption: 'Sitting room / Vintage chair and client art',
      },
      {
        eyebrow: '02 / Continuity',
        title: 'Rooms that speak quietly',
        body: 'Repeating a narrow range of woods, metals, and textiles makes the apartment read as a whole. Subtle changes in scale give each room its own character.',
        image: '/images/project-park-avenue.webp',
        imageAlt: 'Pre-war living room with warm wood furniture and restored moldings',
        caption: 'Living room / Furniture plan and textile palette',
      },
      {
        eyebrow: '03 / Atmosphere',
        title: 'Natural materials, softened light',
        body: 'The final layer focused on how the home changes through the day. Woven shades, tactile fabrics, and low pools of light make the formal shell feel easy to inhabit.',
        image: '/images/about-hero.webp',
        imageAlt: 'Warm minimal interior with built-in bench and shaded table lamp',
        caption: 'Study / Linen, walnut, and hand-finished plaster',
      },
    ],
  },
  'westchester-glass-house': {
    typology: 'Garden addition',
    duration: '16 months',
    introTitle: 'A transparent room that feels grounded in the landscape.',
    intro: [
      'The addition extends a traditional house toward its garden without imitating the original architecture. A disciplined steel frame creates the new room and holds views to mature trees on every side.',
      'Inside, oak millwork and honed stone offset the glass enclosure with weight and warmth. Sightlines were considered from both the old house and the landscape beyond.',
    ],
    scope: ['Enclosure design', 'Kitchen and millwork', 'Lighting design', 'Finish coordination', 'Construction oversight'],
    materials: ['Blackened steel', 'Rift-cut oak', 'Honed soapstone', 'Hand-cast glass'],
    quote: 'The addition succeeds when the boundary between house and garden disappears.',
    chapters: [
      {
        eyebrow: '01 / Connection',
        title: 'A room between house and garden',
        body: 'The steel grid aligns with the existing façade while establishing its own order. Sliding panels open the room completely in mild weather and preserve long views year-round.',
        image: '/images/service-design.webp',
        imageAlt: 'Glass garden pavilion framed in blackened steel',
        caption: 'Garden elevation / Custom steel enclosure',
      },
      {
        eyebrow: '02 / Interior',
        title: 'Warmth within the glass',
        body: 'Oak cabinetry and deep stone counters create a solid interior horizon. Their natural variation prevents the precise structure from feeling clinical.',
        image: '/images/about-hero.webp',
        imageAlt: 'Quiet interior with a long walnut cabinet and softly shaded lamp',
        caption: 'Kitchen detail / Rift-cut oak and honed soapstone',
      },
      {
        eyebrow: '03 / Proportion',
        title: 'Furniture as architecture',
        body: 'The furnishings follow the enclosure’s strong geometry but introduce softer edges and tactile surfaces. Each piece sits low enough to preserve uninterrupted views to the garden.',
        image: '/images/service-build.webp',
        imageAlt: 'Sculptural dining table and timber chairs in a paneled room',
        caption: 'Dining area / Bespoke table and vintage seating',
      },
    ],
  },
  'fifth-avenue-residence': {
    typology: 'Post-war apartment',
    duration: '20 months',
    introTitle: 'A complete renovation organized around one quiet, balanced room.',
    intro: [
      'The existing plan was rebuilt to create a clear center for family life. The dining room now connects the kitchen, living spaces, and private wing, giving the apartment an intuitive order.',
      'Custom paneling conceals storage and technical systems while bringing a consistent scale to the post-war shell. Pale oak, plaster, and brushed metal keep the rooms light without feeling stark.',
    ],
    scope: ['Full architectural plan', 'Kitchen and bathrooms', 'Custom paneling', 'Lighting design', 'Furniture and art'],
    materials: ['White oak', 'Honed plaster', 'Brushed nickel', 'Wool bouclé'],
    quote: 'The dining room became the measure for every other decision.',
    chapters: [
      {
        eyebrow: '01 / Center',
        title: 'A room that sets the measure',
        body: 'The new dining room is open enough for daily use and composed enough for evening. Its sculptural table establishes the scale and geometry repeated throughout the apartment.',
        image: '/images/service-build.webp',
        imageAlt: 'Sculptural white dining table with wood chairs in a paneled room',
        caption: 'Dining room / Custom table and architectural paneling',
      },
      {
        eyebrow: '02 / Contrast',
        title: 'Depth without heaviness',
        body: 'Darker furniture and art give definition to the pale rooms. Curved forms interrupt the apartment’s strict lines and make the plan feel relaxed rather than rigid.',
        image: '/images/project-riverside.webp',
        imageAlt: 'Dark oval dining table beneath a layered chandelier',
        caption: 'Formal dining / Ebonized oak and patinated metal',
      },
      {
        eyebrow: '03 / Arrival',
        title: 'A precise first impression',
        body: 'The entry combines graphic stonework with a small number of sculptural elements. It introduces the project’s restraint before opening into the brighter living spaces.',
        image: '/images/project-carnegie-hill.webp',
        imageAlt: 'Arched entry hall with geometric stone floor and pendant lights',
        caption: 'Entry gallery / Stone mosaic and hand-finished plaster',
      },
    ],
  },
};
