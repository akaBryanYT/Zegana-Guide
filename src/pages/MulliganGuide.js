import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Container from '../components/Common/Container';
import Section from '../components/Common/Section';
import Card from '../components/Common/Card';
import HandExample from '../components/Mulligan/HandExample';
import { MulliganIcon } from '../components/Icons';
import TwoColumnLayout from '../components/Layout/TwoColumnLayout';

// Import deck data
import deckData from '../simplified_final_deck.json';

const PageTitle = styled.h1`
  margin-bottom: ${theme.spacing(4)};
  padding-bottom: ${theme.spacing(2)};
  border-bottom: 2px solid ${theme.colors.primary.main};
`;

const HandsContainer = styled.div`
  margin-top: ${theme.spacing(4)};
`;

const TabContainer = styled.div`
  margin: ${theme.spacing(3)} 0;
`;

const TabButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};
`;

const TabButton = styled.button`
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  background-color: ${props => props.active ? theme.colors.primary.dark : 'rgba(0, 0, 0, 0.3)'};
  color: ${theme.colors.text.primary};
  border: none;
  border-radius: ${theme.borders.radius};
  cursor: pointer;
  font-weight: 600;
  transition: all ${theme.animations.medium};
  
  &:hover {
    background-color: ${theme.colors.primary.main}30;
  }
`;

const KeyPrinciple = styled.div`
  margin-bottom: ${theme.spacing(3)};
  
  h4 {
    color: ${theme.colors.accent.teal};
    margin-bottom: ${theme.spacing(1)};
  }
`;

// Find cards by names
const findCardByName = (name) => deckData.find(card => card.name === name);

// Helper to get multiple cards
const getCardsByNames = (names) => {
  return names.map(name => findCardByName(name)).filter(Boolean);
};

const MulliganGuide = ({ activeVariant }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [hands, setHands] = useState([]);
  
  // Prepare hands data when component mounts or variant changes
  useEffect(() => {
    // Define example hands data
    const handsData = [
      {
        id: 'good1',
        quality: 'good',
        category: 'all',
        title: 'Explosive Ramp',
        cardNames: ['Forest', 'Island', 'Sol Ring', 'Llanowar Elves', 'Gadwick, the Wizened', 'Negate', 'Apothecary Stomper'],
        analysis: 'This hand has two lands (one of each color), Sol Ring, and Llanowar Elves – that\'s explosive ramp. Turn 1 you can play Forest → Sol Ring → Llanowar Elves, leaving you with 4 mana on Turn 2. Gadwick can draw cards early, and you have Negate for protection.',
        verdict: 'Strong Keep',
        variants: ['emrakul', 'darksteel']
      },
      {
        id: 'good2',
        quality: 'good',
        category: 'all',
        title: 'Stable Mana Development',
        cardNames: ['Island', 'Island', 'Thornwood Falls', 'Opt', 'Circuitous Route', 'Prime Speaker Zegana', 'Darksteel Colossus'],
        analysis: 'With 3 lands (two Islands and a UG dual), you have enough to hit early drops. Thornwood Falls entering tapped is fine. Opt helps find missing pieces, and Circuitous Route ensures you hit 6 mana for Zegana by turn 4-5. Having Darksteel Colossus is acceptable since you have ramp.',
        verdict: 'Keep',
        variants: ['darksteel']
      },
      {
        id: 'good3',
        quality: 'good',
        category: 'all',
        title: 'Turn 3 Zegana Setup',
        cardNames: ['Thornwood Falls', 'Forest', 'Wildborn Preserver', 'Goreclaw, Terror of Qal Sisma', 'Tatyova, Benthic Druid', 'Sol Ring', 'Mana Leak'],
        analysis: 'Two lands (one dual that gains life, one Forest) and Sol Ring sets up for success. Turn 1 Forest → Sol Ring, Turn 2 Thornwood Falls and either hold Mana Leak or play Wildborn Preserver. Turn 3 you can cast Tatyova with Sol Ring, drawing cards immediately with land drops.',
        verdict: 'Strong Keep',
        variants: ['emrakul', 'darksteel']
      },
      {
        id: 'good4',
        quality: 'good',
        category: 'darksteel',
        title: 'Fast Darksteel Setup',
        cardNames: ['Temple of Mystery', 'Forest', 'Forest', 'Sol Ring', 'Goreclaw, Terror of Qal Sisma', 'Darksteel Colossus', 'Snakeskin Veil'],
        analysis: `This hand sets up perfectly for an early Darksteel Colossus. Turn 1 Temple into Sol Ring, Turn 2 Forest and Goreclaw, Turn 3 you could potentially cast Darksteel Colossus (with Goreclaw's reduction to 9 mana). You even have Snakeskin Veil to protect against targeted removal.`,
        verdict: 'Perfect Keep',
        variants: ['darksteel']
      },
      {
        id: 'good5',
        quality: 'good',
        category: 'emrakul',
        title: 'Emrakul Ramp Package',
        cardNames: ['Forest', 'Island', 'Sol Ring', 'Circuitous Route', 'Goreclaw, Terror of Qal Sisma', 'Negate', 'Opt'],
        analysis: `This hand has the ideal ramp package for Emrakul. Turn 1 Forest and Sol Ring, Turn 2 Island and Goreclaw (with Sol Ring mana), Turn 3 Circuitous Route putting you at 6-7 mana on Turn 4. You'll be well on your way toward 15 mana for Emrakul. Negate protects key spells and Opt helps dig for more pieces.`,
        verdict: 'Strong Keep',
        variants: ['emrakul']
      },
      {
        id: 'medium1',
        quality: 'medium',
        category: 'all',
        title: 'Borderline Good Hand',
        cardNames: ['Island', 'Forest', 'Forest', 'Circuitous Route', 'Eternal Witness', 'Brineborn Cutthroat', 'Geistwave'],
        analysis: 'This hand has 3 lands with both colors and a ramp spell (Circuitous Route). It lacks early acceleration but Brineborn Cutthroat on turn 2 is fine. Playing Cutthroat on turn 2, you can then threaten to cast Geistwave on turn 3 (which grows Cutthroat) or cast Route on 4.',
        verdict: 'Keepable',
        variants: ['emrakul', 'darksteel']
      },
      {
        id: 'medium2',
        quality: 'medium',
        category: 'emrakul',
        title: 'Slow Emrakul Start',
        cardNames: ['Forest', 'Temple of Mystery', 'Ordeal of Nylea', 'Opt', 'Tatyova, Benthic Druid', 'Emrakul, the Aeons Torn', 'Ambuscade'],
        analysis: 'This hand only has two lands and Emrakul is a dead card until much later. However, Temple of Mystery helps scry for more lands, Opt digs further, and Ordeal of Nylea can fetch two lands eventually. With Tatyova as a draw engine, you might recover, but it\'s a slow hand for an Emrakul build.',
        verdict: 'Borderline Keep, Consider Mulligan',
        variants: ['emrakul']
      },
      {
        id: 'medium3',
        quality: 'medium',
        category: 'darksteel',
        title: 'No Early Ramp',
        cardNames: ['Forest', 'Island', 'Temple of Mystery', 'Wildwood Scourge', 'Into the Roil', 'Prime Speaker Zegana', 'Darksteel Colossus'],
        analysis: 'This hand has three lands with both colors, which is good. However, it lacks any ramp pieces to accelerate your gameplan. Wildwood Scourge can be an early play, but without ramp, casting Zegana or Darksteel Colossus will be delayed. Temple of Mystery helps smooth draws.',
        verdict: 'Keepable in Casual Games',
        variants: ['darksteel']
      },
      {
        id: 'bad1',
        quality: 'bad',
        category: 'all',
        title: 'Too Many Expensive Cards',
        cardNames: ['Forest', 'Forest', 'Temple of Mystery', 'Wildwood Scourge', 'Snakeskin Veil', 'Emrakul, the Aeons Torn', 'Overrun'],
        analysis: 'Only green mana (though Temple can get blue), but the bigger issue is two huge bombs (Emrakul and Overrun) that are uncastable until very late, and no ramp or draw to speed things up. This hand will do nothing relevant until turn 4 or 5.',
        verdict: 'Mulligan',
        variants: ['emrakul', 'darksteel']
      },
      {
        id: 'bad2',
        quality: 'bad',
        category: 'all',
        title: 'All Interaction, No Development',
        cardNames: ['Island', 'Opt', 'Preordain', 'Negate', 'Essence Scatter', 'Bounce Off', 'Winged Coatl'],
        analysis: 'This hand has a single land (Island) which is a huge risk – you\'re missing green entirely and might not hit a second land. All reactive spells (Negate, Scatter, Bounce Off) and a Winged Coatl for defense means you yourself are not advancing meaningfully.',
        verdict: 'Definite Mulligan',
        variants: ['emrakul', 'darksteel']
      },
      {
        id: 'bad3',
        quality: 'bad',
        category: 'emrakul',
        title: 'Too Slow for Emrakul',
        cardNames: ['Island', 'Island', 'Island', 'Think Twice', 'Winged Coatl', 'Emrakul, the Aeons Torn', 'Eternal Witness'],
        analysis: 'Three Islands and no green sources is a problem for a deck that needs green for ramp. With Emrakul in hand, you need significant acceleration, and this hand offers none. Think Twice and Winged Coatl don\'t advance your gameplan toward 15 mana for Emrakul.',
        verdict: 'Definite Mulligan',
        variants: ['emrakul']
      }
    ];
    
    // Convert card names to actual card objects
    const processedHands = handsData.map(hand => ({
      ...hand,
      cards: getCardsByNames(hand.cardNames)
    }));
    
    // Filter hands based on active variant
    setHands(processedHands);
  }, [activeVariant]);
  
  // Filter hands based on active tab and variant
  const filteredHands = hands.filter(hand => {
    if (activeTab === 'all') {
      return hand.variants.includes(activeVariant);
    }
    return hand.category === activeTab && hand.variants.includes(activeVariant);
  });

  return (
    <Container>
      <PageTitle>Mulligan Guide</PageTitle>
      
      <Section
        title="Mulligan Philosophy"
        subtitle="Understanding what makes a good opening hand"
        titleIcon={<MulliganIcon />}
      >
        <p>
          A good opening hand sets the stage for your ramp and draw to take over. With Prime Speaker Zegana, 
          your early decisions significantly impact how quickly you can deploy your Commander and access its 
          card draw power.
        </p>
        
        <KeyPrinciple>
          <h4>What Makes a Strong Opening Hand?</h4>
          <ul>
            <li><strong>Multiple Mana Sources:</strong> Aim for at least 2-3 lands (preferably one of each color) and/or a Sol Ring or mana dork.</li>
            <li><strong>Ramp or Fixing:</strong> Having Llanowar Elves, Sol Ring, or Circuitous Route ensures hitting higher mana by turn 4.</li>
            <li><strong>Early Draw or Interaction:</strong> A cheap draw spell or a single counterspell can smooth your first few turns.</li>
            <li><strong>One Expensive Bomb at Most:</strong> It's okay to have one high-cost finisher as long as the rest of the hand supports eventually casting it.</li>
          </ul>
        </KeyPrinciple>
        
        <TwoColumnLayout
          title="Variant-Specific Considerations"
          emrakulTitle="Emrakul Build Mulligan"
          darksteelTitle="Darksteel Build Mulligan"
          rows={[
            {
              emrakul: (
                <>
                  <p>When playing the Emrakul variant, prioritize:</p>
                  <ul>
                    <li><strong>Heavy ramp</strong> - Since you need to reach 15 mana</li>
                    <li><strong>Card draw</strong> - To find Emrakul and more ramp</li>
                    <li><strong>Protection</strong> - To keep your game plan safe until you can cast Emrakul</li>
                  </ul>
                  <p>An auto-keep hand would include <strong>Sol Ring + green source + ramp spell</strong>. This combination puts you well on your way toward 15 mana.</p>
                  <p>Keep hands with at least 2 lands and 2 ramp pieces, even if you don't have perfect color fixing.</p>
                </>
              ),
              darksteel: (
                <>
                  <p>When playing the Darksteel Colossus variant, look for:</p>
                  <ul>
                    <li><strong>Balanced ramp</strong> - You need less mana (11 vs 15)</li>
                    <li><strong>Cost reduction</strong> - Goreclaw is particularly valuable here</li>
                    <li><strong>Protection</strong> - Snakeskin Veil or counters to protect Colossus on cast</li>
                  </ul>
                  <p>A perfect hand might be <strong>3 lands + Goreclaw + Sol Ring</strong>, as this lets you cast Darksteel as early as turn 3-4.</p>
                  <p>Since Darksteel is easier to cast, you can keep slightly slower hands as long as they have good mana development.</p>
                </>
              )
            }
          ]}
          withCards={false}
        />
      </Section>
      
      <Section
        title="Example Opening Hands"
        subtitle="Analysis of sample hands to guide your mulligan decisions"
      >
        <TabContainer>
          <TabButtons>
            <TabButton 
              active={activeTab === 'all'} 
              onClick={() => setActiveTab('all')}
            >
              All Hands
            </TabButton>
            <TabButton 
              active={activeTab === 'good'} 
              onClick={() => setActiveTab('good')}
            >
              Strong Keeps
            </TabButton>
            <TabButton 
              active={activeTab === 'medium'} 
              onClick={() => setActiveTab('medium')}
            >
              Borderline Hands
            </TabButton>
            <TabButton 
              active={activeTab === 'bad'} 
              onClick={() => setActiveTab('bad')}
            >
              Mulligan Hands
            </TabButton>
            {activeVariant === 'emrakul' && (
              <TabButton 
                active={activeTab === 'emrakul'} 
                onClick={() => setActiveTab('emrakul')}
              >
                Emrakul-Specific
              </TabButton>
            )}
            {activeVariant === 'darksteel' && (
              <TabButton 
                active={activeTab === 'darksteel'} 
                onClick={() => setActiveTab('darksteel')}
              >
                Darksteel-Specific
              </TabButton>
            )}
          </TabButtons>
        </TabContainer>
        
        <HandsContainer>
          {filteredHands.map(hand => (
            <HandExample
              key={hand.id}
              title={hand.title}
              cards={hand.cards}
              analysis={hand.analysis}
              verdict={hand.verdict}
              quality={hand.quality}
              variant={activeVariant}
            />
          ))}
        </HandsContainer>
      </Section>
      
      <Section
        title="Mulligan Tips"
        background="rgba(0, 0, 0, 0.2)"
        padding={3}
      >
        <Card title="Mulligan Rules to Remember">
          <ul>
            <li><strong>Don't be greedy for perfect hands</strong> - A functional 7-card hand is better than a perfect 5-card hand.</li>
            <li><strong>Prioritize lands and ramp</strong> - You can draw into threats, but you need consistent mana development.</li>
            <li><strong>2 lands minimum</strong> - Unless you have Sol Ring + 1 land + 1-drop ramp (a risky but potentially explosive keep).</li>
            <li><strong>Color balance matters</strong> - Ensure you have both colors or ways to find them.</li>
            <li><strong>Consider your opponents</strong> - If facing aggressive decks, value early interaction more highly.</li>
            <li><strong>Use London Mulligan wisely</strong> - When you take a mulligan, you can bottom a high-cost card you won't need early.</li>
          </ul>
        </Card>
        
        <Card 
          title={`${activeVariant === 'emrakul' ? 'Emrakul' : 'Darksteel'} Build Specific Advice`}
          style={{ marginTop: theme.spacing(3) }}
          variant={activeVariant}
        >
          {activeVariant === 'emrakul' ? (
            <ul>
              <li><strong>Keep hands with Sol Ring</strong> - The acceleration is paramount for reaching 15 mana.</li>
              <li><strong>Mulligan slow hands</strong> - Without ramp, casting Emrakul becomes nearly impossible.</li>
              <li><strong>Value blue sources</strong> - For counterspell protection once you're ready to go for Emrakul.</li>
              <li><strong>Don't worry if Emrakul is in your opening hand</strong> - You have enough card draw to find it later.</li>
            </ul>
          ) : (
            <ul>
              <li><strong>Goreclaw is gold</strong> - Reducing Darksteel to 9 mana makes a huge difference.</li>
              <li><strong>Balance ramp and interaction</strong> - You need both to protect your earlier Darksteel Colossus.</li>
              <li><strong>Acceptable to keep Darksteel in opening hand</strong> - With good ramp, you can cast it by mid-game.</li>
              <li><strong>Value protection over pure ramp</strong> - Unlike Emrakul, Darksteel can be countered.</li>
            </ul>
          )}
        </Card>
      </Section>
    </Container>
  );
};

export default MulliganGuide;