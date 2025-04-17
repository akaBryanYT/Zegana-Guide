import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import Container from '../components/Common/Container';
import Section from '../components/Common/Section';
import Card from '../components/Common/Card';
import CardGrid from '../components/Cards/CardGrid';
import { 
  CardIcon, 
  RampIcon, 
  DrawIcon, 
  CounterIcon, 
  InteractionIcon, 
  FinisherIcon, 
  CreatureIcon, 
  EmrakulIcon, 
  DarksteelIcon
} from '../components/Icons';
import CardTooltip from '../components/Cards/CardTooltip';

// Import deck data
import deckData from '../simplified_final_deck.json';

const PageTitle = styled.h1`
  margin-bottom: ${theme.spacing(4)};
  padding-bottom: ${theme.spacing(2)};
  border-bottom: 2px solid ${theme.colors.primary.main};
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(3)};
`;

const FilterButton = styled.button`
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  background-color: ${props => props.active ? theme.colors.primary.dark : 'rgba(0, 0, 0, 0.3)'};
  color: ${theme.colors.text.primary};
  border: none;
  border-radius: ${theme.borders.radius};
  cursor: pointer;
  font-weight: 600;
  transition: all ${theme.animations.medium};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${theme.spacing(0.5)};
  }
  
  &:hover {
    background-color: ${theme.colors.primary.main}30;
  }
`;

const CardDetailView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${theme.spacing(4)} 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const CardImageContainer = styled.div`
  margin-bottom: ${theme.spacing(2)};
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-right: ${theme.spacing(4)};
    margin-bottom: 0;
  }
  
  img {
    width: 250px;
    max-width: 100%;
    border-radius: 4.75% / 3.5%;
    box-shadow: ${theme.shadows.medium};
  }
`;

const CardDetailsContainer = styled.div`
  flex: 1;
`;

const CardName = styled.h2`
  color: ${theme.colors.accent.teal};
  margin-top: 0;
`;

const CardType = styled.div`
  color: ${theme.colors.text.secondary};
  font-style: italic;
  margin-bottom: ${theme.spacing(2)};
`;

const CardText = styled.div`
  white-space: pre-line;
  margin-bottom: ${theme.spacing(3)};
  line-height: 1.5;
`;

const SynergiesSection = styled.div`
  margin-top: ${theme.spacing(3)};
`;

const SynergyCard = styled.div`
  margin-bottom: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
  background-color: rgba(0, 168, 168, 0.1);
  border-radius: ${theme.borders.radius};
  
  h4 {
    margin-top: 0;
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.colors.accent.teal};
  }
`;

const CardList = styled.ul`
  padding-left: ${theme.spacing(3)};
  
  li {
    margin-bottom: ${theme.spacing(0.5)};
  }
`;

const PowerPlay = styled.div`
  padding: ${theme.spacing(2)};
  background-color: rgba(136, 204, 0, 0.1);
  border-left: 4px solid ${theme.colors.secondary.main};
  border-radius: ${theme.borders.radius};
  margin-top: ${theme.spacing(3)};
`;

// Find cards by name
const findCardByName = (name) => deckData.find(card => card.name === name);

// Get card categories and synergies information
const getCardCategoriesAndSynergies = () => {
  // This data could come from an API or a more detailed JSON file
  // For now, we'll hardcode some example categories and synergies
  return {
    categories: [
      { id: 'ramp', label: 'Ramp', icon: <RampIcon />, cards: [
        'Sol Ring', 'Llanowar Elves', 'Druid of the Cowl', 'Circuitous Route', 'Goreclaw, Terror of Qal Sisma', 'Ordeal of Nylea'
      ]},
      { id: 'draw', label: 'Card Draw', icon: <DrawIcon />, cards: [
        'Prime Speaker Zegana', 'Arcanis the Omnipotent', 'Garruk\'s Uprising', 'Tatyova, Benthic Druid', 
        'Chart a Course', 'Arcane Epiphany', 'Think Twice', 'Opt', 'Preordain', 'Finale of Revelation'
      ]},
      { id: 'interaction', label: 'Interaction', icon: <InteractionIcon />, cards: [
        'Mana Leak', 'Negate', 'Essence Scatter', 'Ambuscade', 'Bushwhack', 'Bounce Off', 
        'Geistwave', 'Into the Roil', 'Cyclone Summoner', 'Witness Protection'
      ]},
      { id: 'finishers', label: 'Finishers', icon: <FinisherIcon />, cards: [
        'Emrakul, the Aeons Torn', 'Darksteel Colossus', 'Expropriate', 'Overrun', 'Omniscience', 'Rite of Replication'
      ]},
      { id: 'creatures', label: 'Key Creatures', icon: <CreatureIcon />, cards: [
        'Prime Speaker Zegana', 'Goreclaw, Terror of Qal Sisma', 'Tatyova, Benthic Druid', 'Eternal Witness',
        'Pelakka Wurm', 'Predator Ooze', 'Heroes\' Bane', 'Wildwood Scourge', 'Venom Connoisseur'
      ]},
    ],
    
    synergies: {
      'Prime Speaker Zegana': [
        { 
          name: 'Power Boosting', 
          description: 'Zegana enters with X +1/+1 counters where X is the greatest power among other creatures you control. The higher the power, the more cards you draw.',
          synergisticCards: ['Darksteel Colossus', 'Emrakul, the Aeons Torn', 'Heroes\' Bane', 'Predator Ooze', 'Fractal Harness']
        },
        {
          name: 'Card Advantage Engines',
          description: 'Combine Zegana with other card draw effects to build an unstoppable advantage engine.',
          synergisticCards: ['Garruk\'s Uprising', 'Archmage of Runes', 'Tatyova, Benthic Druid']
        }
      ],
      'Emrakul, the Aeons Torn': [
        {
          name: 'Extra Turn Abuse',
          description: 'Emrakul gives you an extra turn when cast. You can bounce it back to hand and recast for multiple turns.',
          synergisticCards: ['Geistwave', 'Omniscience', 'Into the Roil']
        },
        {
          name: 'Zegana Synergy',
          description: 'When Zegana enters with Emrakul in play, you draw 16 cards - nearly your whole deck!',
          synergisticCards: ['Prime Speaker Zegana']
        }
      ],
      'Darksteel Colossus': [
        {
          name: 'Kicked Rite of Replication',
          description: 'Creating five indestructible 11/11 tramplers with Rite of Replication is often game-ending.',
          synergisticCards: ['Rite of Replication']
        },
        {
          name: 'Unblockable Damage',
          description: 'Make Darksteel Colossus unblockable to deal 11 damage directly.',
          synergisticCards: ['Rogue\'s Passage']
        }
      ],
      'Garruk\'s Uprising': [
        {
          name: 'Trample + Deathtouch Combo',
          description: 'When creatures have both trample (from Uprising) and deathtouch, they only need to assign 1 damage to each blocker.',
          synergisticCards: ['Venom Connoisseur', 'Winged Coatl', 'Predator Ooze']
        },
        {
          name: 'Card Draw on Entry',
          description: 'Any creature with power 4+ that enters draws a card, creating continuous advantage.',
          synergisticCards: ['Darksteel Colossus', 'Emrakul, the Aeons Torn', 'Goreclaw, Terror of Qal Sisma', 'Heroes\' Bane']
        }
      ],
      'Archmage of Runes': [
        {
          name: 'Cantripping Interaction',
          description: 'Every instant or sorcery you cast draws a card, turning interaction into card advantage.',
          synergisticCards: ['Mana Leak', 'Negate', 'Essence Scatter', 'Geistwave', 'Into the Roil']
        }
      ],
      'Fractal Harness': [
        {
          name: 'Exponential Counter Growth',
          description: 'Doubles +1/+1 counters on attacks, creating massive creatures quickly.',
          synergisticCards: ['Heroes\' Bane', 'Wildwood Scourge', 'Predator Ooze']
        }
      ],
      'Cyclone Summoner': [
        {
          name: 'One-Sided Board Wipe',
          description: 'Bounces all permanents except Giants, Wizards, and lands - many of your key creatures are Wizards!',
          synergisticCards: ['Prime Speaker Zegana', 'Arcanis the Omnipotent', 'Gadwick, the Wizened', 'Archmage of Runes']
        }
      ]
    },
    
    powerPlays: [
      {
        title: 'Zegana + Big Creature',
        description: 'Cast Zegana with a huge creature in play to draw 10+ cards and establish an insurmountable advantage.',
        cards: ['Prime Speaker Zegana', 'Darksteel Colossus', 'Emrakul, the Aeons Torn']
      },
      {
        title: 'Kicked Rite of Replication',
        description: 'Target the right creature with Rite of Replication kicked for a game-ending board state.',
        cards: ['Rite of Replication', 'Darksteel Colossus', 'Eternal Witness', 'Pelakka Wurm']
      },
      {
        title: 'Deathtouch + Trample',
        description: 'Give your creatures both deathtouch and trample to make them virtually unblockable.',
        cards: ['Venom Connoisseur', 'Garruk\'s Uprising', 'Gnarlid Colony', 'Overrun']
      },
      {
        title: 'Archmage + Cheap Spells',
        description: 'Chain cheap spells with Archmage of Runes for massive card advantage.',
        cards: ['Archmage of Runes', 'Opt', 'Think Twice', 'Geistwave', 'Mana Leak']
      }
    ]
  };
};

const CardAnalysis = ({ activeVariant }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCard, setSelectedCard] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);
  
  // Get categories and synergies data
  const cardInfo = getCardCategoriesAndSynergies();
  
  // Filter based on active variant
  useEffect(() => {
    let cards = [...deckData];
    
    // Handle Emrakul/Darksteel Colossus exclusivity based on variant
    if (activeVariant === 'emrakul') {
      cards = cards.filter(card => card.name !== 'Darksteel Colossus');
    } else {
      cards = cards.filter(card => card.name !== 'Emrakul, the Aeons Torn');
    }
    
    // Apply category filter if not "all"
    if (selectedCategory !== 'all') {
      const categoryInfo = cardInfo.categories.find(cat => cat.id === selectedCategory);
      if (categoryInfo) {
        cards = cards.filter(card => categoryInfo.cards.includes(card.name));
      }
    }
    
    setFilteredCards(cards);
    
    // Reset selected card if it's not in filtered cards
    if (selectedCard && !cards.find(card => card.name === selectedCard.name)) {
      setSelectedCard(null);
    }
  }, [selectedCategory, activeVariant, selectedCard]);
  
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  
  return (
    <Container>
      <PageTitle>Card Analysis</PageTitle>
      
      <Section
        title="Card Breakdown"
        subtitle="Explore the key cards in the deck and their roles"
        titleIcon={<CardIcon />}
      >
        <p>
          This Prime Speaker Zegana deck contains carefully selected cards that work together 
          to provide massive card advantage, ramp into enormous threats, and overwhelm opponents. 
          Use the filters below to explore different categories of cards.
        </p>
        
        <FilterContainer>
          <FilterButton 
            active={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
          >
            <CardIcon />
            All Cards
          </FilterButton>
          
          {cardInfo.categories.map(category => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              {category.label}
            </FilterButton>
          ))}
          
          <FilterButton
            active={selectedCategory === activeVariant}
            onClick={() => setSelectedCategory(activeVariant)}
          >
            {activeVariant === 'emrakul' ? <EmrakulIcon /> : <DarksteelIcon />}
            {activeVariant === 'emrakul' ? 'Emrakul Build' : 'Darksteel Build'}
          </FilterButton>
        </FilterContainer>
        
        <CardGrid 
          cards={filteredCards} 
          onCardClick={handleCardClick}
        />
      </Section>
      
      {selectedCard && (
        <Section
          title="Card Details"
          titleAs="h3"
        >
          <CardDetailView>
            <CardImageContainer>
              {selectedCard.normal_image_uri && (
                <img 
                  src={selectedCard.normal_image_uri} 
                  alt={selectedCard.name} 
                />
              )}
            </CardImageContainer>
            
            <CardDetailsContainer>
              <CardName>{selectedCard.name}</CardName>
              <CardType>{selectedCard.type_line}</CardType>
              
              <CardText>{selectedCard.oracle_text}</CardText>
              
              {selectedCard.power && selectedCard.toughness && (
                <p><strong>Power/Toughness:</strong> {selectedCard.power}/{selectedCard.toughness}</p>
              )}
              
              {/* Display synergies if available */}
              {cardInfo.synergies[selectedCard.name] && (
                <SynergiesSection>
                  <h3>Key Synergies</h3>
                  
                  {cardInfo.synergies[selectedCard.name].map((synergy, index) => (
                    <SynergyCard key={index}>
                      <h4>{synergy.name}</h4>
                      <p>{synergy.description}</p>
                      
                      <h5>Synergistic Cards:</h5>
                      <CardList>
                        {synergy.synergisticCards.map((cardName, idx) => {
                          const card = findCardByName(cardName);
                          return (
                            <li key={idx}>
                              {card ? (
                                <CardTooltip card={card} nameOnly>
                                  {cardName}
                                </CardTooltip>
                              ) : cardName}
                            </li>
                          );
                        })}
                      </CardList>
                    </SynergyCard>
                  ))}
                </SynergiesSection>
              )}
              
              {/* Display related power plays if this card is part of one */}
              {cardInfo.powerPlays.some(pp => pp.cards.includes(selectedCard.name)) && (
                <div>
                  <h3>Featured Power Plays</h3>
                  
                  {cardInfo.powerPlays
                    .filter(pp => pp.cards.includes(selectedCard.name))
                    .map((powerPlay, index) => (
                      <PowerPlay key={index}>
                        <h4>{powerPlay.title}</h4>
                        <p>{powerPlay.description}</p>
                        
                        <h5>Key Cards:</h5>
                        <CardList>
                          {powerPlay.cards.map((cardName, idx) => {
                            const card = findCardByName(cardName);
                            return (
                              <li key={idx}>
                                {card ? (
                                  <CardTooltip card={card} nameOnly>
                                    {cardName}
                                  </CardTooltip>
                                ) : cardName}
                              </li>
                            );
                          })}
                        </CardList>
                      </PowerPlay>
                    ))
                  }
                </div>
              )}
            </CardDetailsContainer>
          </CardDetailView>
        </Section>
      )}
      
      <Section
        title="Power Plays"
        subtitle="Game-winning card combinations and synergies"
        titleIcon={<FinisherIcon />}
        background="rgba(0, 0, 0, 0.2)"
        padding={3}
      >
        <p>
          The Prime Speaker Zegana deck features several powerful card combinations that can 
          lead to explosive turns and game-winning plays. Understanding these interactions is 
          key to piloting the deck effectively.
        </p>
        
        {cardInfo.powerPlays.map((powerPlay, index) => (
          <Card 
            key={index} 
            title={powerPlay.title}
            style={{ marginBottom: theme.spacing(3) }}
          >
            <p>{powerPlay.description}</p>
            
            <h4>Cards Involved:</h4>
            <CardList>
              {powerPlay.cards.map((cardName, idx) => {
                const card = findCardByName(cardName);
                return (
                  <li key={idx}>
                    {card ? (
                      <CardTooltip card={card} nameOnly>
                        {cardName}
                      </CardTooltip>
                    ) : cardName}
                  </li>
                );
              })}
            </CardList>
          </Card>
        ))}
      </Section>
      
      <Section
        title={`${activeVariant === 'emrakul' ? 'Emrakul' : 'Darksteel Colossus'} Analysis`}
        titleIcon={activeVariant === 'emrakul' ? <EmrakulIcon /> : <DarksteelIcon />}
        variant={activeVariant}
      >
        <p>
          The {activeVariant === 'emrakul' ? 'Emrakul' : 'Darksteel Colossus'} build has some specific 
          card interactions and strategic considerations:
        </p>
        
        {activeVariant === 'emrakul' ? (
          <>
            <h3>Emrakul Key Interactions</h3>
            <CardList>
              <li>
                <strong>Extra Turn Chaining</strong> - After casting Emrakul and getting an extra turn, 
                you can use <CardTooltip card={findCardByName("Geistwave")} nameOnly>Geistwave</CardTooltip> or 
                <CardTooltip card={findCardByName("Into the Roil")} nameOnly>Into the Roil</CardTooltip> to 
                bounce Emrakul back to hand (especially when you have <CardTooltip card={findCardByName("Omniscience")} nameOnly>Omniscience</CardTooltip> out), 
                then recast for another extra turn.
              </li>
              <li>
                <strong>Annihilator + Rogue's Passage</strong> - Make Emrakul unblockable with 
                <CardTooltip card={findCardByName("Rogue's Passage")} nameOnly>Rogue's Passage</CardTooltip> after 
                forcing opponents to sacrifice six permanents with Annihilator 6 trigger.
              </li>
              <li>
                <strong>Uncounterable Cast</strong> - Emrakul cannot be countered, meaning you can tap out 
                with confidence once you have 15 mana, even against control decks.
              </li>
              <li>
                <strong>Protection from Colored Spells</strong> - Emrakul dodges most removal, but note that 
                abilities can still target it (like planeswalker -X abilities).
              </li>
            </CardList>
          </>
        ) : (
          <>
            <h3>Darksteel Colossus Key Interactions</h3>
            <CardList>
              <li>
                <strong>Kicked Rite of Replication</strong> - Creating five 11/11 indestructible trampling 
                Darksteel Colossi with <CardTooltip card={findCardByName("Rite of Replication")} nameOnly>Rite of Replication</CardTooltip> is 
                often an immediate game-winner.
              </li>
              <li>
                <strong>Goreclaw Reduction</strong> - <CardTooltip card={findCardByName("Goreclaw, Terror of Qal Sisma")} nameOnly>Goreclaw</CardTooltip> reduces 
                Darksteel Colossus to just 9 mana, making it castable much earlier in the game.
              </li>
              <li>
                <strong>Indestructible + Cyclone Summoner</strong> - Darksteel Colossus survives when you cast 
                <CardTooltip card={findCardByName("Cyclone Summoner")} nameOnly>Cyclone Summoner</CardTooltip>, often 
                leaving you with just Summoner and Colossus on an otherwise empty board.
              </li>
              <li>
                <strong>Reshuffle Protection</strong> - If Darksteel would go to graveyard, it shuffles back into 
                your library instead, protecting it from mill effects and recurring it naturally.
              </li>
            </CardList>
          </>
        )}
      </Section>
    </Container>
  );
};

export default CardAnalysis;