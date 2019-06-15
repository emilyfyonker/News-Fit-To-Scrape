//this is where the jquery onClick events go
$("#scrape").on("click", function () {
	$.ajax({
		method: "GET",
		url: "/scrape",
	}).done(function (data) {
		console.log(data)
		window.location.href = "/"
	})
});

$("#home").on("click", function () {
	$.ajax({
		method: "GET",
		url: "/",
	}).done(function (data) {
		console.log(data)
		//window.location.href = "/"
	})
});

$(".save").on("click", function () {
	const data = {
		_id: $(this).attr("data-id"),
		saved: true
	};
	console.log(data);



	$.ajax({
		method: "POST",
		url: `/articles/save/${data._id}`,
	}).done(function (data) {
		console.log(data)
		window.location.href = "/"
	})
});

$(".navbar-nav li").click(function () {
	$(".navbar-nav li").removeClass("active");
	$(this).addClass("active");
});

$(".delete").on("click", function () {
	console.log("delete test");
	var thisId = $(this).attr("data-id");
	$.ajax({
		mehtod: "POST",
		url: "/articles/delete/" + thisId
	}).done(function (data) {
		window.location = "/saved"
	})
});


$(".saveNote").on("click", function () {
	var articleId = $(this).attr("data-id");
	if (!$("#noteText" + articleId).val()) {
		alert("please enter a note to save")
	} else {
		console.log("reaching this point")
		$.ajax({
			method: "POST",
			url: "/notes",
			data: {
				_id: articleId,
				text: $("#noteText" + articleId).val()
			}
		}).done(function (data) {
			console.log(data)
			$("#noteText" + articleId).val("");
			$(".modalNote").modal("hide");
			window.location = "/saved"

		});
	}
});

$(".deleteNote").on("Click", function () {
	var noteId = $(this).attr("data-note-id");
	var artcileId = $(this).attr("data-article-id");
	$.ajax({
		mehtod: "DELETE",
		url: "/notes/delete/" + noteId + "/" + articleId
	}).done(function (data) {
		console.log(data)
		$(".modalNote").modal("hide");
		window.location = "/saved"
	})
});

$("#empty").on("click", function () {
	console.log("testing")
	//$(".panel panel-default").text("");
	// $(".panel-body").text("");
	// $(".panel-heading").text("");
	$(".col-md-12").text("");
   })