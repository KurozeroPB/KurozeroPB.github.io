$(document).ready(() => {
    $('.modal').modal();

    $('#jeanne').click(() => {
        $('#projectsModal').load('./modals/projects/js/jeanne.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#img-search').click(() => {
        $('#projectsModal').load('./modals/projects/js/img-search.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#mordred').click(() => {
        $('#projectsModal').load('./modals/projects/js/mordred.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#discotify').click(() => {
        $('#projectsModal').load('./modals/projects/js/discotify.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#illya').click(() => {
        $('#projectsModal').load('./modals/projects/csharp/illya.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#imdbcore').click(() => {
        $('#projectsModal').load('./modals/projects/csharp/imdbcore.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#kitsu').click(() => {
        $('#projectsModal').load('./modals/projects/csharp/kitsu.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#elixirboat').click(() => {
        $('#projectsModal').load('./modals/projects/elixir/elixirboat.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#go-weeb').click(() => {
        $('#projectsModal').load('./modals/projects/go/go-weeb.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#kitsu-go').click(() => {
        $('#projectsModal').load('./modals/projects/go/kitsu-go.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#program-go').click(() => {
        $('#projectsModal').load('./modals/projects/go/program-go.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#maika').click(() => {
        $('#projectsModal').load('./modals/projects/rust/maika.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#hitagi').click(() => {
        $('#projectsModal').load('./modals/projects/ruby/hitagi.html', (response, status, xhr) => {
            if (status === 'error') {
                toastError(xhr);
            } else {
                $('#projectsModal').modal('open');
            }
        });
    });

    $('#close').click(() => {
        $('#projectsModal').modal('close');
    });
});

function toastError(xhr) {
    let toastContent = $(`<span>An error occured: ${xhr.status} ${xhr.statusText}</span>`)
        .add($('<button id="toast-btn" class="btn-flat toast-action" onclick="toastDismiss()">Undo</button>'));
    Materialize.toast(toastContent, 10000, 'red lighten-1');
}

function toastDismiss() {
    let toastElement = $('.toast').first()[0];
    let toastInstance = toastElement.M_Toast;
    toastInstance.remove();
}