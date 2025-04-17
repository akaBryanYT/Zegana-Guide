import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../theme';
import Container from '../components/Common/Container';
import Section from '../components/Common/Section';
import Card from '../components/Common/Card';
import Button from '../components/Common/Button';
import { 
  StrategyIcon, 
  MulliganIcon, 
  CardsIcon, 
  CompareIcon,
  EmrakulIcon,
  DarksteelIcon,
  RampIcon,
  DrawIcon
} from '../Icons';

// Import card data
import deckData from '../../src/simplified_final_deck.json';

// Find Zegana card data
const zeganaCard = deckData.find(card => card.name === "Prime Speaker Zegana");
const emrakulCard = deckData.find(card => card.name === "Emrakul, the Aeons Torn");
const darksteelCard = deckData.find(card => card.name === "Darksteel Colossus");

const Hero = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.dark} 0%, ${theme.colors.secondary.dark} 100%);
  padding: ${theme.spacing(8)} 0;
  margin-bottom: ${theme.spacing(6)};
  text-align: center;
  color: ${theme.colors.text.primary};
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: ${theme.spacing(2)};
  background: linear-gradient(120deg, ${theme.colors.accent.blue}, ${theme.colors.accent.teal});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(0, 204, 170, 0.3);
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing(4)};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(3)};
  margin-top: ${theme.spacing(4)};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const DeckVariantSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${theme.spacing(4)};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing(3)};
  }
`;

const DeckVariantCard = styled(Card)`
  flex: 1;
  max-width: 500px;
  min-width: 300px;
`;

const CommanderCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.dark} 0%, ${theme.colors.secondary.dark} 100%);
  border-radius: ${theme.borders.radiusLarge};
  padding: ${theme.spacing(3)};
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing(4)};
  box-shadow: ${theme.shadows.medium};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const CommanderImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: ${theme.borders.radius};
  margin-right: ${theme.spacing(3)};
  box-shadow: ${theme.shadows.medium};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    margin-right: 0;
    margin-bottom: ${theme.spacing(2)};
  }
`;

const CommanderInfo = styled.div`
  flex: 1;
`;

const CommanderName = styled.h2`
  margin-bottom: ${theme.spacing(1)};
  color: ${theme.colors.accent.teal};
`;

const CommanderType = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing(2)};
  font-style: italic;
`;

const CommanderText = styled.p`
  margin-bottom: ${theme.spacing(2)};
`;

const OracleText = styled.div`
  white-space: pre-line;
`;

const FinisherCardImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: ${theme.borders.radius};
  float: right;
  margin-left: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(2)};
  box-shadow: ${theme.shadows.small};
`;

const Home = ({ activeVariant }) => {
  return (
    <>
      <Hero>
        <HeroContent>
          <Container>
            <HeroTitle>Prime Speaker Zegana Commander Guide</HeroTitle>
            <HeroSubtitle>
              A comprehensive guide to mastering the Prime Speaker Zegana Commander deck in both Emrakul and Darksteel Colossus variants
            </HeroSubtitle>
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              component={Link}
              to="/strategy"
            >
              Explore the Guide
            </Button>
          </Container>
        </HeroContent>
      </Hero>
      
      <Container>
        <CommanderCard>
          <CommanderImage 
            src={zeganaCard?.normal_image_uri} 
            alt="Prime Speaker Zegana" 
          />
          <CommanderInfo>
            <CommanderName>Prime Speaker Zegana</CommanderName>
            <CommanderType>{zeganaCard?.type_line}</CommanderType>
            <OracleText>
              {zeganaCard?.oracle_text}
            </OracleText>
            <Button
              variant="outlined"
              component={Link}
              to="/cards"
            >
              View Card Analysis
            </Button>
          </CommanderInfo>
        </CommanderCard>
        
        <Section 
          title="Welcome to the Simic Combine" 
          subtitle="Discover the power of growth, adaptation, and card advantage with this comprehensive guide"
        >
          <p>
            This guide provides an in-depth analysis of the Prime Speaker Zegana Commander deck, 
            a blue-green (Simic) powerhouse built around ramping into huge creatures and leveraging 
            +1/+1 counter synergies to draw massive amounts of cards and overwhelm opponents.
          </p>
          <p>
            With two different finisher options — Emrakul, the Aeons Torn for uncounterable power 
            or Darksteel Colossus for indestructible resilience — the deck can adapt to different 
            metas and playstyles while maintaining its core identity.
          </p>
          <p>
            Explore the sections below to master every aspect of the deck, from opening hands to 
            late-game combinations.
          </p>
          
          <CardGrid>
            <Card 
              title="Deck Strategy" 
              icon={<StrategyIcon />}
              interactive 
              as={Link} 
              to="/strategy"
            >
              Learn the core gameplan, win conditions, and how to navigate different phases of the game. 
              Discover key synergies and powerful lines of play to maximize your chances of victory.
            </Card>
            
            <Card 
              title="Mulligan Guide" 
              icon={<MulliganIcon />}
              interactive 
              as={Link} 
              to="/mulligan"
            >
              Understand what makes a great opening hand and when to mulligan. See example hands with 
              detailed analysis to improve your early-game decision-making.
            </Card>
            
            <Card 
              title="Card Analysis" 
              icon={<CardsIcon />}
              interactive 
              as={Link} 
              to="/cards"
            >
              Detailed breakdown of key cards in the deck, their roles, and how to use them effectively. 
              Learn the interactions between cards that enable powerful plays.
            </Card>
            
            <Card 
              title="Variant Comparison" 
              icon={<CompareIcon />}
              interactive 
              as={Link} 
              to="/variants"
            >
              Compare the Emrakul and Darksteel Colossus builds, understand their strengths and weaknesses, 
              and learn when to play each variant based on your meta.
            </Card>
          </CardGrid>
        </Section>
        
        <Section 
          title="Core Mechanics" 
          subtitle="The pillars of the deck's strategy"
        >
          <CardGrid>
            <Card 
              title="Explosive Ramp" 
              icon={<RampIcon />}
              variant="dark"
            >
              Accelerate your mana development with dorks, ramp spells, and cost reduction. 
              The deck aims to reach 6+ mana quickly for an early Zegana and push toward massive 
              finishers in the mid-to-late game.
            </Card>
            
            <Card 
              title="Card Advantage Engine" 
              icon={<DrawIcon />}
              variant="dark"
            >
              Use Prime Speaker Zegana as a draw engine to fuel your gameplan. With the right setup, 
              she can draw 10+ cards in a single ETB, providing the resources needed to overwhelm opponents.
            </Card>
          </CardGrid>
        </Section>
        
        <Section 
          title="Deck Variants" 
          subtitle="Choose your finisher based on your meta"
        >
          <p>
            This Prime Speaker Zegana deck has two variations that share 67 cards but differ in their 
            ultimate finisher. Choose the variant that best fits your playgroup and expected opposition.
          </p>
          
          <DeckVariantSection>
            <DeckVariantCard
              title="Eldrazi Build" 
              icon={<EmrakulIcon />}
              variant="emrakul"
              highlight={activeVariant === 'emrakul'}
            >
              <FinisherCardImage
                src={emrakulCard?.normal_image_uri}
                alt="Emrakul, the Aeons Torn"
              />
              <p>
                Features <strong>Emrakul, the Aeons Torn</strong> as the ultimate finisher.
              </p>
              <ul>
                <li>Uncounterable cast trigger</li>
                <li>Extra turn on cast</li>
                <li>Annihilator 6 devastates opponents' boards</li>
                <li>Protection from colored spells</li>
                <li>Higher mana cost (15) but higher ceiling</li>
              </ul>
              <p>
                <strong>Best against:</strong> Control-heavy metas with counterspells and removal
              </p>
            </DeckVariantCard>
            
            <DeckVariantCard
              title="Colossus Build" 
              icon={<DarksteelIcon />}
              variant="darksteel"
              highlight={activeVariant === 'darksteel'}
            >
              <FinisherCardImage
                src={darksteelCard?.normal_image_uri}
                alt="Darksteel Colossus"
              />
              <p>
                Features <strong>Darksteel Colossus</strong> as the ultimate finisher.
              </p>
              <ul>
                <li>Indestructible 11/11 with trample</li>
                <li>Shuffles back into library if it would go to graveyard</li>
                <li>Lower mana cost (11) allows earlier deployment</li>
                <li>Survives board wipes and most removal</li>
                <li>Creates a repeatable threat that's hard to permanently answer</li>
              </ul>
              <p>
                <strong>Best against:</strong> Wrath-heavy metas and grindy matchups
              </p>
            </DeckVariantCard>
          </DeckVariantSection>
        </Section>
      </Container>
    </>
  );
};

export default Home;