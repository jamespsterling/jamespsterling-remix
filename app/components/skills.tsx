import { InputNode, InputLink, NodeProps, ResponsiveNetwork } from '@nivo/network';
import { data } from '~/data/portfolio';
import { animated, to } from '@react-spring/web';

type SkillNode = InputNode & {
  label?: string;
  height: number;
  size: number;
  color: string;
  radius: number;
};

type SkillLink = InputLink & {
  distance: number;
};

function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  };
}

const NonMemoizedNetworkNode = <Node extends SkillNode>({
  node,
  animated: animatedProps,
  onClick,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}: NodeProps<Node>) => {
  return (
    <>
      <animated.circle
        data-testid={`node.${node.id}`}
        transform={to([animatedProps.x, animatedProps.y, animatedProps.scale], (x, y, scale) => {
          return `translate(${x},${y}) scale(${scale})`;
        })}
        r={to([animatedProps.size], (size) => size / 2)}
        fill={animatedProps.color}
        strokeWidth={animatedProps.borderWidth}
        stroke={animatedProps.borderColor}
        opacity={animatedProps.opacity}
        onClick={onClick ? (event) => onClick(node, event) : undefined}
        onMouseEnter={onMouseEnter ? (event) => onMouseEnter(node, event) : undefined}
        onMouseMove={onMouseMove ? (event) => onMouseMove(node, event) : undefined}
        onMouseLeave={onMouseLeave ? (event) => onMouseLeave(node, event) : undefined}
      />
      {node.data.label && (
        <animated.text
          fill="#fff"
          textAnchor="middle"
          // paintOrder="stoke"
          // stroke="#000"
          // strokeWidth="1px"
          // strokeLinecap="butt"
          // strokeLinejoin="miter"
          // fontWeight={800}
          fontSize={to([animatedProps.size], (size) => `${Math.round(size / 3)}px`)}
          transform={to([animatedProps.x, animatedProps.y, animatedProps.size], (x, y, size) => {
            console.log('size', size);
            return `translate(${x},${y + size / 12})`;
          })}
        >
          {node.data.label}
        </animated.text>
      )}
    </>
  );
};

export default function Skills() {
  const nodes: SkillNode[] = [
    {
      id: 'Skills',
      height: 1,
      size: 12,
      color: '#262626',
      radius: 6,
    },
  ];
  const links: SkillLink[] = [];

  data.skills.forEach((skill) => {
    nodes.push({
      id: skill.name,
      label: skill.name,
      height: 1,
      size: 48,
      color: '#4b20a1',
      radius: 24,
    });

    skill.secondary.forEach((s) => {
      nodes.push({
        id: s,
        label: s,
        height: 1,
        size: 40,
        color: '#914100',
        radius: 20,
      });
      // Link to nexus
      links.push({
        source: 'Skills',
        target: skill.name,
        distance: 175,
      });
      // Link to child
      links.push({
        source: skill.name,
        target: s,
        distance: 150,
      });
    });
  });

  console.log({ nodes, links });

  return (
    <div id="skills" style={{ height: '900px', width: '100%' }}>
      <h2 className="heading" style={{ marginBottom: 0 }}>
        Skills
      </h2>

      <ResponsiveNetwork
        data={{ nodes, links }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={(e) => e.distance}
        centeringStrength={0.8}
        repulsivity={100}
        nodeSize={(n) => n.size}
        activeNodeSize={(n) => 1.25 * n.size}
        nodeColor={(e) => e.color}
        isInteractive={false}
        nodeBorderWidth={2}
        iterations={260}
        nodeBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        nodeComponent={NonMemoizedNetworkNode}
        linkThickness={(n) => n.target.data.height}
        linkBlendMode="overlay"
        motionConfig="slow"
      />
      {/* <ul>
        {data.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul> */}
    </div>
  );
}
