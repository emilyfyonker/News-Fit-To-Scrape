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
	var thisId = $(this).attr("data-id");
	$.ajax({
		mehtod: "POST",
		url: "/articles/delete/" + thisId
	}).done(function (data) {
		window.location = "/saved"
	})
});

$(".saveNote").on("click", function () {
	var thisId = $(this).attr("data-id");
	if (!$("#noteText" + thisId).val()) {
		alert("please enter a note to save")
	} else {
		$.ajax({
			method: "POST",
			url: "/notes.save/" + thisId,
			data: {
				text: $("#noteText" + thisId).val()
			}
		}).done(function (data) {
			console.log(data)
			$("#noteText" + thisId).val("");
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