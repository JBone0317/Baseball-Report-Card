{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Player recommendations (pre-processed)\
const playerRecommendations = \{\
  "2": \{\
    name: "Joey Cooling",\
    recommendations: \{\
      batting: [\
        "Situational hitting: Lower average with runners in scoring position than overall average. Work on mental approach and focus in RBI situations.",\
        "Focus on making more consistent contact - your patience at the plate is good (high PS/PA), but contact percentage is very low.",\
        "Work on hand-eye coordination drills focusing on making contact rather than power."\
      ],\
      pitching: [\
        "Control: Walking too many batters. Focus on command drills and throwing strikes early in counts.",\
        "Continue focusing on keeping the ball down to maintain excellent ground ball rates.",\
        "Practice pitching from the stretch position to improve with runners on base."\
      ],\
      fielding: [\
        "Catching fundamentals: High putout to assist ratio with errors suggests focus needed on secure catching and glove work.",\
        "Practice glove positioning and securing the ball before attempting to make a play."\
      ]\
    \},\
    strengths: \{\
      batting: ["PS/PA: 4.88 (Shows good patience at the plate)", "FB%: 25.0% (Good lift on the ball)"],\
      pitching: ["ERA: 6.68 (Better than team average)", "GB%: 67.8% (Excellent ground ball rate)"],\
      fielding: ["FPCT: 0.875 (Above team average)"]\
    \},\
    weaknesses: \{\
      batting: ["AVG: 0.083 (Well below team average)", "C%: 16.7% (Making contact on only a small fraction of swings)"],\
      pitching: ["WHIP: 3.41 (Too many baserunners)", "BB/INN: 1.98 (Walking too many batters)"],\
      fielding: []\
    \}\
  \},\
  // Add more players following the same structure\
  "3": \{\
    name: "Clark Wragg",\
    recommendations: \{\
      batting: [\
        "Continue with current approach - excellent balance of contact skills and plate discipline.",\
        "Could be a model for other players to emulate in terms of batting approach."\
      ],\
      pitching: [\
        "Work on keeping the ball down more consistently to reduce line drive percentage.",\
        "Focus on pitch location to avoid the heart of the plate."\
      ],\
      fielding: [\
        "Catching fundamentals: High putout to assist ratio with errors suggests focus needed on secure catching and glove work."\
      ]\
    \},\
    strengths: \{\
      batting: ["AVG: 0.451 (Excellent batting average)", "OBP: 0.606 (Elite on-base skills)"],\
      pitching: ["K/BB: 1.16 (Good strikeout to walk ratio)"],\
      fielding: ["FPCT: 0.864 (Above team average)"]\
    \},\
    weaknesses: \{\
      batting: [],\
      pitching: ["ERA: 8.75 (Slightly above team average)", "LD%: 22.6% (Allowing too many line drives)"],\
      fielding: []\
    \}\
  \},\
  // Add more players...\
\};\
\
document.addEventListener('DOMContentLoaded', function() \{\
  const playerSelect = document.getElementById('playerSelect');\
  const playerAnalysis = document.getElementById('playerAnalysis');\
  \
  // Populate player dropdown\
  Object.keys(playerRecommendations).forEach(playerNumber => \{\
    const option = document.createElement('option');\
    option.value = playerNumber;\
    option.textContent = `#$\{playerNumber\} $\{playerRecommendations[playerNumber].name\}`;\
    playerSelect.appendChild(option);\
  \});\
  \
  // Show first player by default\
  showPlayerAnalysis(Object.keys(playerRecommendations)[0]);\
  \
  // Event listener for player selection\
  playerSelect.addEventListener('change', function() \{\
    showPlayerAnalysis(this.value);\
  \});\
  \
  function showPlayerAnalysis(playerNumber) \{\
    const player = playerRecommendations[playerNumber];\
    let html = `\
      <div class="player-header">\
        <div class="player-number">#$\{playerNumber\}</div>\
        <h2>$\{player.name\}</h2>\
      </div>\
      \
      <div class="tabs">\
        <button class="tab-button active" data-tab="recommendations">Recommendations</button>\
        <button class="tab-button" data-tab="strengths">Strengths</button>\
        <button class="tab-button" data-tab="weaknesses">Areas for Improvement</button>\
      </div>\
      \
      <div class="tab-content active" id="recommendations">\
        <h3>Personalized Recommendations</h3>\
        \
        <div class="section">\
          <h4>Batting Recommendations</h4>\
          $\{renderList(player.recommendations.batting)\}\
        </div>\
        \
        <div class="section">\
          <h4>Pitching Recommendations</h4>\
          $\{renderList(player.recommendations.pitching)\}\
        </div>\
        \
        <div class="section">\
          <h4>Fielding Recommendations</h4>\
          $\{renderList(player.recommendations.fielding)\}\
        </div>\
      </div>\
      \
      <div class="tab-content" id="strengths">\
        <h3>Player Strengths</h3>\
        \
        <div class="section">\
          <h4>Batting Strengths</h4>\
          $\{renderList(player.strengths.batting)\}\
        </div>\
        \
        <div class="section">\
          <h4>Pitching Strengths</h4>\
          $\{renderList(player.strengths.pitching)\}\
        </div>\
        \
        <div class="section">\
          <h4>Fielding Strengths</h4>\
          $\{renderList(player.strengths.fielding)\}\
        </div>\
      </div>\
      \
      <div class="tab-content" id="weaknesses">\
        <h3>Areas for Improvement</h3>\
        \
        <div class="section">\
          <h4>Batting Improvements</h4>\
          $\{renderList(player.weaknesses.batting)\}\
        </div>\
        \
        <div class="section">\
          <h4>Pitching Improvements</h4>\
          $\{renderList(player.weaknesses.pitching)\}\
        </div>\
        \
        <div class="section">\
          <h4>Fielding Improvements</h4>\
          $\{renderList(player.weaknesses.fielding)\}\
        </div>\
      </div>\
    `;\
    \
    playerAnalysis.innerHTML = html;\
    \
    // Set up tab switching\
    document.querySelectorAll('.tab-button').forEach(button => \{\
      button.addEventListener('click', function() \{\
        // Remove active class from all buttons and content\
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));\
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));\
        \
        // Add active class to clicked button and corresponding content\
        this.classList.add('active');\
        document.getElementById(this.dataset.tab).classList.add('active');\
      \});\
    \});\
  \}\
  \
  function renderList(items) \{\
    if (!items || items.length === 0) \{\
      return '<p class="empty-message">No significant items identified.</p>';\
    \}\
    \
    return `<ul>$\{items.map(item => `<li>$\{item\}</li>`).join('')\}</ul>`;\
  \}\
\});}