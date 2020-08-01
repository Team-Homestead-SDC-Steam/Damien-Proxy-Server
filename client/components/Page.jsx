import React from 'react';

const Page = () => (
  <div id="top_container">
    <img alt="Page header" src="/images/proxy-header.png" />
    <img alt="Navigation" src="/images/proxy-nav.png" />
    <table>
      <tr>
        <td>
          <div id="photo-carousel" />
        </td>
        <td>
          <div id="game-description" />
          <div id="user-tags" />
        </td>
      </tr>
    </table>
    <div id="dlc" />
    <div id="system-requirements" />
    <div id="related-games" />
    <img alt="Game bundles" src="/images/proxy-bundle.png" />
    <table>
      <tr>
        <td>
          <img alt="Announcements" src="/images/proxy-announcements.png" />
          <img alt="Requirements" src="/images/proxy-requirements.png" />
        </td>
        <td>
          <img id="languages" alt="Languages" src="/images/proxy-languages.png" />
          <img id="awards" alt="Proxy header" src="/images/proxy-awards.png" />
          <img id="details" alt="Game details" src="/images/proxy-details.png" />
        </td>
      </tr>
    </table>
    <div id="reviews-graph" />
    <div id="reviews" />
  </div>
);

export default Page;
