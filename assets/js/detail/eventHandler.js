$('.increase_volume').onclick = function() {
    $('.volume').innerText = +$('.volume').innerText + 1;
}
$('.decrease_volume').onclick = function() {
    let volume = +$('.volume').innerText;
    if (volume > 1)
        $('.volume').innerText = volume - 1;
}

// handle when clicking reply text
const replyComment = (reply) => {
    const data = $$('.leave_comment');
    
    // check if there's no input to write comment so that create a new one
    if(!data.length) {
        const input = 
        `<textarea class="input-leave_cmt" placeholder="Write something..." cols="50" rows="1"></textarea>
        <button class="btn btn-leave_cmt transition" onclick="handleComment(this)">Send</button>
        <button class="btn btn-leave_cmt transition" onclick="handleCancel(this)">Cancel</button>`;
        render(reply.parentElement, 'div', "leave_comment", null, input, null, null);  

        // make the line space between 2 elements, because the box to write comment has absolute position, 
        // it's overided by below element which is created after that
        render(reply.parentElement, 'div', null, 'space_cmt', null, null);    
        $('#space_cmt').style.height = '50px';
    } 
}

// handle cancel button
const handleCancel = button => {
    button.parentElement.parentElement.removeChild(button.parentElement.nextElementSibling);       
    button.parentElement.parentElement.removeChild(button.parentElement);       
}

// handle send button
const handleComment = button => {
    let parent = button.parentElement;
    let count  = 0;

    // set date for comments
    const date = new Date;
    let month;
    switch(date.getMonth() + 1) {
        case 1: month = 'Jan'; 
            break;
        case 2: month = 'Feb';
            break;
        case 3: month = 'March'
            break;
        case 4: month = 'April';
            break;
        case 5: month = 'May';
            break;
        case 6: month = 'June';
            break;
        case 7: month = 'July'
            break;
        case 8: month = 'Aug';
            break;
        case 9: month = 'Sep';
            break;
        case 10: month = 'Oct';
            break;
        case 11: month = 'Nov';
            break;
        default: month = 'Dec';
    }

    // count how many level from element standing
    while (parent.id != "comment-parent") {
        parent = parent.parentElement;
        count++;
    }
    
    // make to hide child replies
    // const hide_rep = `<p class="hide_cmts">________ &nbsp; &nbsp; Hide replies <i class="ti-angle-down"></i></p>`
    // render($('.comment-right-parent'), 'p', 'hide_cmts', null, hide_rep, null, null );


    // create new comments with some constraints
    const content_cmt = $('.input-leave_cmt');
    const comment_child = 
    `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCI6D-EkL1058Fnk2RliFP17INDLXdmVG_0Q&usqp=CAU" alt="user_avatar" class="avatar">
    <div class="comment-right">
        <span class="comment-user_name">Alexander</span>
        <span class="comment-datetime">${month + ' ' + date.getDate() + ', ' + date.getFullYear()}</span>
        <p class="comment-content">${content_cmt.value}</p>
        <span class="comment-reply" onclick="replyComment(this)">Reply &nbsp;&nbsp;&nbsp;</span>
        <i class="fa-regular fa-heart icon icon-love_comment" onclick="handleLike(this)"></i>
        <i class="ti-close icon icon-delete_cmt" onclick="handleDeleteCmt(this)"></i>
    </div>`;

    // check if input comment is empty => no permit to send
    if (content_cmt.value) {
        if (count <= 4) 
            render(button.parentElement.parentElement, 'div', "comment comment-child", null, comment_child, null, null);
        else {
            const child_level2 = button.parentElement.parentElement.parentElement.parentElement;
            render(child_level2, 'div', "comment comment-child", null, comment_child, null, null); 
        }

        // auto remove after creating new comment
        button.parentElement.parentElement.removeChild(button.parentElement.nextElementSibling);       
        button.parentElement.parentElement.removeChild(button.parentElement);       
    }
   
}

// handle like comment
const handleLike = icon_heart => {
    icon_heart.classList.toggle('more_bold')
}

// handle delete comment
const handleDeleteCmt = icon_delete => {
    if (confirm("Are you sure to delete this comment?"))
        icon_delete.parentElement.parentElement.parentElement.removeChild(icon_delete.parentElement.parentElement);    
}