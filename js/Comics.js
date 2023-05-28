AFRAME.registerComponent("comics", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spider-man",
        title: "Web of Spider Man",
        url: "./assets/thumbnails/spider.jpg",
      },
      {
        id: "Avengers",
        title: "Avengers",
        url: "./assets/thumbnails/Avenger.jpg",
      },
    
      {
        id: "doraemon",
        title: "Doraemon",
        url: "./assets/thumbnails/Dor.jpg",
      },
      {
        id: "Pokemon",
        title: "Pokemon",
        url: "./assets/thumbnails/pok.jpg",
      },
    ];
    let prevoiusXPosition = -63;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Plane Element
      const planeE1 = this.createPlane(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      planeE1.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      planeE1.appendChild(titleEl);

      this.placesContainer.appendChild(planeE1);
    }
  },
  createPlane: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#FF0000",
      opacity: 1,
    });

    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      width: 18,
      height: 26,
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    
    return entityEl;
  },
});




/*   */
