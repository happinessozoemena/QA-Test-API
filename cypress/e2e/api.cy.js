describe("API End-to-End Tests", () => {
    let accessToken;
  
    it("should log in and fetch items", () => {
      // User login
      cy.request({
        method: "POST",
        url: "https://qa-test-9di7.onrender.com/auth/login",
        body: {
          username: "joe23",
          password: "josh",
        },
        timeout: 60000, // 60 seconds timeout
      }).then((response) => {
        expect(response.status).to.eq(201);
        accessToken = response.body.accessToken;
  
        // Fetch items using the token
        cy.request({
          method: "GET",
          url: "https://qa-test-9di7.onrender.com/items",
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
        }).then((itemResponse) => {
          expect(itemResponse.status).to.eq(200);
          expect(itemResponse.body).to.be.an("array");
        });
      });
    });
  
    it("should handle item creation", () => {
      // User login
      cy.request({
        method: "POST",
        url: "https://qa-test-9di7.onrender.com/auth/login",
        body: {
          username: "joe23",
          password: "josh",
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        const token = response.body.accessToken;
  
        // Create an item using the token
        cy.request({
          method: "POST",
          url: "https://qa-test-9di7.onrender.com/items",
          headers: {
            Authorization: `Bearer ${token}`,  // Use backticks here
          },
          body: {
            name: "Close-up",
            description: "This is a toothpaste used in washing teeth",
          },
        }).then((createResponse) => {
          expect(createResponse.status).to.eq(201);
          expect(createResponse.body.name).to.eq("Close-up");
        });
      });
    });
  });
  