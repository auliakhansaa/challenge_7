const express = require("express");
const { GameName, UserGame, UserGameBiodata, UserGameHistory } = require("../models");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home/index");
});

router.post('/auth', function(req, res) {


	UserGame.findOne({
        where: {
          username: req.body.username,
          password : req.body.password
        }
      }).then((userGame) => {
          if(userGame){
            res.redirect("/userGames"); }
            else{
            res.status(500).send('Username atau Password Salah.')
                
            }

          });
    });









/** START USER GAME ROUTE */

router.get("/userGames", (req, res) => {
  UserGame.findAll({
    order: [["username", "ASC"]]
  }).then((userGames) => {
    res.render("pages/userGames/index", {
      pageTitle: "Daftar Barang",
      userGames,
    });
  });
});

router.get("/userGames/create", (req, res) => {
 res.render("pages/userGames/create", {
      pageTitle: "Tambah Data",
  
  });
});

router.post("/userGames", (req, res) => {
  const { username, password} = req.body;

  UserGame.create({
    username,
    password
  }).then(() => {
    res.redirect("/userGames");
  });
});

router.get("/products/:id", (req, res) => {
  Product.findOne({
    where: { id: req.params.id },
    include: "supplier",
  }).then((product) => {
    res.render("pages/products/show", {
      pageTitle: `Barang: ${product.name}`,
      product,
    });
  });
});

router.get("/userGames/:id/edit", async (req, res) => {
  const userGame = await UserGame.findOne({
    where: { id: req.params.id },
  });

  res.render("pages/userGames/edit", {
    pageTitle: "Edit User Game",
    userGame
  });
});

router.put("/userGames/:id", (req, res) => {
  const { username, password} = req.body;

  UserGame.update(
    {
      username,
      password
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => {
    res.redirect("/userGames");
  });
});

router.delete("/userGames/:id", (req, res) => {
  UserGame.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.redirect("back");
  });
});

/** END USER GAMES ROUTE */

/** START USER GAMES BIODATA ROUTE */

router.get("/userGameBiodatas", (req, res) => {
  UserGameBiodata.findAll({
    order: [["id_user_game", "ASC"]],
  }).then((userGameBiodatas) => {
    res.render("pages/userGameBiodatas/index", {
      pageTitle: "User Game Biodata",
      userGameBiodatas,
    });
  });
});

router.get("/userGameBiodatas/create", (req, res) => {
    UserGame.findAll({
      order: [["username", "ASC"]],
    }).then((userGames) => {
      res.render("pages/userGameBiodatas/create", {
        pageTitle: "Buat Barang",
        userGames,
      });
    });
  });
  
  router.post("/userGameBiodatas", (req, res) => {
    const { id_user_game, nama_lengkap, tanggal_lahir, alamat } = req.body;
  
    UserGameBiodata.create({
      id_user_game,
      nama_lengkap,
      tanggal_lahir,
      alamat,
    }).then(() => {
      res.redirect("/userGameBiodatas");
    });
  });

  router.get("/userGameBiodatas/:id", (req, res) => {
    UserGameBiodata.findOne({
      where: { id: req.params.id },
      include: "id_user_game_b",
    }).then((userGameBiodata) => {
      res.render("pages/userGameBiodatas/show", {
        pageTitle: `Barang: ${userGameBiodata.nama_lengkap}`,
        userGameBiodata,
      });
    });
  });

  router.get("/userGameBiodatas/:id/edit", async (req, res) => {
    const userGameBiodata = await UserGameBiodata.findOne({
      where: { id: req.params.id },
    });
    UserGame.findAll({
        order: [["username", "ASC"]],
     }) .then((userGames) => {
    res.render("pages/userGameBiodatas/edit", {
      pageTitle: "Edit User Game",
      userGameBiodata,
      userGames
    });
  });
});
  
  router.put("/userGameBiodatas/:id", (req, res) => {
    const { id_user_game, nama_lengkap,tanggal_lahir,alamat} = req.body;
  
    UserGameBiodata.update(
      {
        id_user_game,
        nama_lengkap,
        tanggal_lahir,
        alamat
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => {
      res.redirect("/userGameBiodatas");
    });
  });

router.delete("/userGameBiodatas/:id", (req, res) => {
  UserGameBiodata.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.redirect("back");
  });
});

/** END USER GAME BIODATA ROUTE */


/** START USER GAMES HISTORY ROUTE */

router.get("/userGameHistories", (req, res) => {
    UserGameHistory.findAll({
      order: [["id_user_game", "ASC"]],
      include: "id_user_game_h",
    }).then((userGameHistories) => {
      res.render("pages/userGameHistories/index", {
        pageTitle: "User Game Biodata",
        userGameHistories,
      });
    });
  });
  
  router.get("/userGameHistories/create", (req, res) => {
      UserGame.findAll({
        order: [["username", "ASC"]],
      }).then((userGames) => {
        res.render("pages/userGameHistories/create", {
          pageTitle: "Buat Barang",
          userGames,
        });
      });
    });
    
    router.post("/userGameHistories", (req, res) => {
      const { id_user_game, id_game, score } = req.body;
    
      UserGameHistory.create({
        id_user_game,
        id_game,
        score,
      }).then(() => {
        res.redirect("/userGameHistories");
      });
    });
  
    router.get("/userGameHistories/:id", (req, res) => {
      UserGameHistory.findOne({
        where: { id: req.params.id },
        include: "id_user_game_h",
      }).then((userGameHistory) => {
        res.render("pages/userGameHistories/show", {
          pageTitle: `Barang: ${userGameHistory.score}`,
          userGameHistory,
        });
      });
    });
  
    router.get("/userGameHistories/:id/edit", async (req, res) => {
      const userGameHistory = await UserGameHistory.findOne({
        where: { id: req.params.id },
      });
      UserGame.findAll({
          order: [["username", "ASC"]],
       }) .then((userGames) => {
      res.render("pages/userGameHistories/edit", {
        pageTitle: "Edit User Game",
        userGameHistory,
        userGames
      });
    });
  });
    
    router.put("/userGameHistories/:id", (req, res) => {
      const { id_user_game, id_game,score} = req.body;
    
      UserGameHistory.update(
        {
          id_user_game,
          id_game,
          score
        },
        {
          where: {
            id: req.params.id,
          },
        }
      ).then(() => {
        res.redirect("/userGameHistories");
      });
    });
  
  router.delete("/userGameHistories/:id", (req, res) => {
    UserGameHistories.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("back");
    });
  });
  
  /** END USER GAME HISTORY ROUTE */

module.exports = router;
